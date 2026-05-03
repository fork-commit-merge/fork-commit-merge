const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");
const timezoneSelect = document.getElementById("timezone-select");
const timezoneSearch = document.getElementById("timezone-search");
const currentTimezoneDisplay = document.getElementById("current-timezone");
const formatToggle = document.getElementById("format-toggle");
const dayNameElement = document.getElementById("day-name");
const dateNumberElement = document.getElementById("date-number");
const monthYearElement = document.getElementById("month-year");
const fullDateElement = document.getElementById("full-date");
const digitalTimeElement = document.getElementById("digital-time");

let currentTimezone = 'local';
let is24HourFormat = false;

// Comprehensive timezone data sorted in ascending order of GMT offset
const timezoneData = [
  // GMT-11
  { value: 'Pacific/Midway', label: 'Midway (GMT-11)', offset: -11 },
  { value: 'Pacific/Pago_Pago', label: 'Pago Pago (GMT-11)', offset: -11 },
  { value: 'Pacific/Niue', label: 'Niue (GMT-11)', offset: -11 },
  
  // GMT-10
  { value: 'Pacific/Honolulu', label: 'Honolulu (GMT-10)', offset: -10 },
  { value: 'Pacific/Rarotonga', label: 'Rarotonga (GMT-10)', offset: -10 },
  { value: 'Pacific/Tahiti', label: 'Tahiti (GMT-10)', offset: -10 },
  
  // GMT-9:30
  { value: 'Pacific/Marquesas', label: 'Marquesas (GMT-9:30)', offset: -9.5 },
  
  // GMT-9
  { value: 'America/Anchorage', label: 'Anchorage (GMT-9)', offset: -9 },
  { value: 'Pacific/Gambier', label: 'Gambier (GMT-9)', offset: -9 },
  
  // GMT-8
  { value: 'America/Los_Angeles', label: 'Los Angeles (GMT-8)', offset: -8 },
  { value: 'America/Vancouver', label: 'Vancouver (GMT-8)', offset: -8 },
  { value: 'America/Tijuana', label: 'Tijuana (GMT-8)', offset: -8 },
  { value: 'America/Dawson', label: 'Dawson (GMT-8)', offset: -8 },
  { value: 'America/Whitehorse', label: 'Whitehorse (GMT-8)', offset: -8 },
  
  // GMT-7
  { value: 'America/Denver', label: 'Denver (GMT-7)', offset: -7 },
  { value: 'America/Phoenix', label: 'Phoenix (GMT-7)', offset: -7 },
  { value: 'America/Chihuahua', label: 'Chihuahua (GMT-7)', offset: -7 },
  { value: 'America/Mazatlan', label: 'Mazatlán (GMT-7)', offset: -7 },
  { value: 'America/Boise', label: 'Boise (GMT-7)', offset: -7 },
  
  // GMT-6
  { value: 'America/Chicago', label: 'Chicago (GMT-6)', offset: -6 },
  { value: 'America/Mexico_City', label: 'Mexico City (GMT-6)', offset: -6 },
  { value: 'America/Guatemala', label: 'Guatemala (GMT-6)', offset: -6 },
  { value: 'America/El_Salvador', label: 'San Salvador (GMT-6)', offset: -6 },
  { value: 'America/Tegucigalpa', label: 'Tegucigalpa (GMT-6)', offset: -6 },
  { value: 'America/Managua', label: 'Managua (GMT-6)', offset: -6 },
  { value: 'America/Costa_Rica', label: 'San José (GMT-6)', offset: -6 },
  { value: 'America/Belize', label: 'Belize (GMT-6)', offset: -6 },
  { value: 'America/Regina', label: 'Regina (GMT-6)', offset: -6 },
  { value: 'America/Swift_Current', label: 'Swift Current (GMT-6)', offset: -6 },
  { value: 'America/Winnipeg', label: 'Winnipeg (GMT-6)', offset: -6 },
  
  // GMT-5
  { value: 'America/New_York', label: 'New York (GMT-5)', offset: -5 },
  { value: 'America/Toronto', label: 'Toronto (GMT-5)', offset: -5 },
  { value: 'America/Montreal', label: 'Montreal (GMT-5)', offset: -5 },
  { value: 'America/Havana', label: 'Havana (GMT-5)', offset: -5 },
  { value: 'America/Nassau', label: 'Nassau (GMT-5)', offset: -5 },
  { value: 'America/Kingston', label: 'Kingston (GMT-5)', offset: -5 },
  { value: 'America/Port-au-Prince', label: 'Port-au-Prince (GMT-5)', offset: -5 },
  { value: 'America/Santo_Domingo', label: 'Santo Domingo (GMT-4)', offset: -4 },
  { value: 'America/Lima', label: 'Lima (GMT-5)', offset: -5 },
  { value: 'America/Bogota', label: 'Bogota (GMT-5)', offset: -5 },
  { value: 'America/Panama', label: 'Panama (GMT-5)', offset: -5 },
  { value: 'America/Eirunepe', label: 'Eirunepé (GMT-5)', offset: -5 },
  { value: 'America/Rio_Branco', label: 'Rio Branco (GMT-5)', offset: -5 },
  { value: 'America/Indiana/Indianapolis', label: 'Indianapolis (GMT-5)', offset: -5 },
  { value: 'America/Indiana/Marengo', label: 'Marengo (GMT-5)', offset: -5 },
  { value: 'America/Indiana/Vevay', label: 'Vevay (GMT-5)', offset: -5 },
  { value: 'America/Kentucky/Louisville', label: 'Louisville (GMT-5)', offset: -5 },
  { value: 'America/Kentucky/Monticello', label: 'Monticello (GMT-5)', offset: -5 },
  { value: 'America/Michigan/Detroit', label: 'Detroit (GMT-5)', offset: -5 },
  { value: 'America/North_Dakota/Center', label: 'Center (GMT-6)', offset: -6 },
  { value: 'America/North_Dakota/New_Salem', label: 'New Salem (GMT-6)', offset: -6 },
  { value: 'America/North_Dakota/Beulah', label: 'Beulah (GMT-6)', offset: -6 },
  { value: 'America/Iqaluit', label: 'Iqaluit (GMT-5)', offset: -5 },
  { value: 'America/Pangnirtung', label: 'Pangnirtung (GMT-5)', offset: -5 },
  { value: 'America/Resolute', label: 'Resolute (GMT-6)', offset: -6 },
  { value: 'America/Rankin_Inlet', label: 'Rankin Inlet (GMT-6)', offset: -6 },
  { value: 'America/Cambridge_Bay', label: 'Cambridge Bay (GMT-7)', offset: -7 },
  { value: 'America/Yellowknife', label: 'Yellowknife (GMT-7)', offset: -7 },
  { value: 'America/Inuvik', label: 'Inuvik (GMT-7)', offset: -7 },
  { value: 'America/Creston', label: 'Creston (GMT-7)', offset: -7 },
  { value: 'America/Dawson_Creek', label: 'Dawson Creek (GMT-7)', offset: -7 },
  { value: 'America/Fort_Nelson', label: 'Fort Nelson (GMT-7)', offset: -7 },
  { value: 'America/Hermosillo', label: 'Hermosillo (GMT-7)', offset: -7 },
  
  // GMT-4
  { value: 'America/Argentina/Buenos_Aires', label: 'Buenos Aires (GMT-3)', offset: -3 },
  { value: 'America/Sao_Paulo', label: 'São Paulo (GMT-3)', offset: -3 },
  { value: 'America/Montevideo', label: 'Montevideo (GMT-3)', offset: -3 },
  { value: 'America/Paramaribo', label: 'Paramaribo (GMT-3)', offset: -3 },
  { value: 'America/Cayenne', label: 'Cayenne (GMT-3)', offset: -3 },
  { value: 'America/Recife', label: 'Recife (GMT-3)', offset: -3 },
  { value: 'America/Fortaleza', label: 'Fortaleza (GMT-3)', offset: -3 },
  { value: 'America/Araguaina', label: 'Araguaína (GMT-3)', offset: -3 },
  { value: 'America/Bahia', label: 'Salvador (GMT-3)', offset: -3 },
  { value: 'America/Belem', label: 'Belém (GMT-3)', offset: -3 },
  { value: 'America/Maceio', label: 'Maceió (GMT-3)', offset: -3 },
  { value: 'America/Santiago', label: 'Santiago (GMT-4)', offset: -4 },
  { value: 'America/Caracas', label: 'Caracas (GMT-4)', offset: -4 },
  { value: 'America/La_Paz', label: 'La Paz (GMT-4)', offset: -4 },
  { value: 'America/Asuncion', label: 'Asunción (GMT-4)', offset: -4 },
  { value: 'America/Georgetown', label: 'Georgetown (GMT-4)', offset: -4 },
  { value: 'America/Port_of_Spain', label: 'Port of Spain (GMT-4)', offset: -4 },
  { value: 'America/Cuiaba', label: 'Cuiabá (GMT-4)', offset: -4 },
  { value: 'America/Campo_Grande', label: 'Campo Grande (GMT-4)', offset: -4 },
  { value: 'America/Boa_Vista', label: 'Boa Vista (GMT-4)', offset: -4 },
  { value: 'America/Porto_Velho', label: 'Porto Velho (GMT-4)', offset: -4 },
  { value: 'America/Thule', label: 'Thule (GMT-4)', offset: -4 },
  { value: 'America/Bermuda', label: 'Bermuda (GMT-4)', offset: -4 },
  { value: 'America/Anguilla', label: 'Anguilla (GMT-4)', offset: -4 },
  { value: 'America/Antigua', label: 'Antigua (GMT-4)', offset: -4 },
  { value: 'America/Aruba', label: 'Aruba (GMT-4)', offset: -4 },
  { value: 'America/Barbados', label: 'Barbados (GMT-4)', offset: -4 },
  { value: 'America/Blanc-Sablon', label: 'Blanc-Sablon (GMT-4)', offset: -4 },
  { value: 'America/Curacao', label: 'Curaçao (GMT-4)', offset: -4 },
  { value: 'America/Dominica', label: 'Dominica (GMT-4)', offset: -4 },
  { value: 'America/Grenada', label: 'Grenada (GMT-4)', offset: -4 },
  { value: 'America/Guadeloupe', label: 'Guadeloupe (GMT-4)', offset: -4 },
  { value: 'America/Kralendijk', label: 'Kralendijk (GMT-4)', offset: -4 },
  { value: 'America/Lower_Princes', label: 'Lower Prince\'s Quarter (GMT-4)', offset: -4 },
  { value: 'America/Marigot', label: 'Marigot (GMT-4)', offset: -4 },
  { value: 'America/Martinique', label: 'Martinique (GMT-4)', offset: -4 },
  { value: 'America/Montserrat', label: 'Montserrat (GMT-4)', offset: -4 },
  { value: 'America/Port_of_Spain', label: 'Port of Spain (GMT-4)', offset: -4 },
  { value: 'America/Puerto_Rico', label: 'San Juan (GMT-4)', offset: -4 },
  { value: 'America/Santo_Domingo', label: 'Santo Domingo (GMT-4)', offset: -4 },
  { value: 'America/St_Barthelemy', label: 'St. Barthélemy (GMT-4)', offset: -4 },
  { value: 'America/St_Kitts', label: 'St. Kitts (GMT-4)', offset: -4 },
  { value: 'America/St_Lucia', label: 'St. Lucia (GMT-4)', offset: -4 },
  { value: 'America/St_Thomas', label: 'St. Thomas (GMT-4)', offset: -4 },
  { value: 'America/St_Vincent', label: 'St. Vincent (GMT-4)', offset: -4 },
  { value: 'America/Tortola', label: 'Tortola (GMT-4)', offset: -4 },
  { value: 'Atlantic/Bermuda', label: 'Bermuda (GMT-4)', offset: -4 },
  
  // GMT-3
  { value: 'America/Argentina/Buenos_Aires', label: 'Buenos Aires (GMT-3)', offset: -3 },
  { value: 'America/Sao_Paulo', label: 'São Paulo (GMT-3)', offset: -3 },
  { value: 'America/Montevideo', label: 'Montevideo (GMT-3)', offset: -3 },
  { value: 'America/Paramaribo', label: 'Paramaribo (GMT-3)', offset: -3 },
  { value: 'America/Cayenne', label: 'Cayenne (GMT-3)', offset: -3 },
  { value: 'America/Recife', label: 'Recife (GMT-3)', offset: -3 },
  { value: 'America/Fortaleza', label: 'Fortaleza (GMT-3)', offset: -3 },
  { value: 'America/Araguaina', label: 'Araguaína (GMT-3)', offset: -3 },
  { value: 'America/Bahia', label: 'Salvador (GMT-3)', offset: -3 },
  { value: 'America/Belem', label: 'Belém (GMT-3)', offset: -3 },
  { value: 'America/Maceio', label: 'Maceió (GMT-3)', offset: -3 },
  { value: 'America/Godthab', label: 'Nuuk (GMT-3)', offset: -3 },
  { value: 'America/Miquelon', label: 'Miquelon (GMT-3)', offset: -3 },
  { value: 'America/Montevideo', label: 'Montevideo (GMT-3)', offset: -3 },
  { value: 'America/Argentina/Buenos_Aires', label: 'Buenos Aires (GMT-3)', offset: -3 },
  { value: 'America/Argentina/Catamarca', label: 'Catamarca (GMT-3)', offset: -3 },
  { value: 'America/Argentina/Cordoba', label: 'Córdoba (GMT-3)', offset: -3 },
  { value: 'America/Argentina/Jujuy', label: 'Jujuy (GMT-3)', offset: -3 },
  { value: 'America/Argentina/La_Rioja', label: 'La Rioja (GMT-3)', offset: -3 },
  { value: 'America/Argentina/Mendoza', label: 'Mendoza (GMT-3)', offset: -3 },
  { value: 'America/Argentina/Rio_Gallegos', label: 'Río Gallegos (GMT-3)', offset: -3 },
  { value: 'America/Argentina/Salta', label: 'Salta (GMT-3)', offset: -3 },
  { value: 'America/Argentina/San_Juan', label: 'San Juan (GMT-3)', offset: -3 },
  { value: 'America/Argentina/San_Luis', label: 'San Luis (GMT-3)', offset: -3 },
  { value: 'America/Argentina/Tucuman', label: 'Tucumán (GMT-3)', offset: -3 },
  { value: 'America/Argentina/Ushuaia', label: 'Ushuaia (GMT-3)', offset: -3 },
  { value: 'America/Bahia', label: 'Bahia (GMT-3)', offset: -3 },
  { value: 'America/Belem', label: 'Belém (GMT-3)', offset: -3 },
  { value: 'America/Argentina/Buenos_Aires', label: 'Buenos Aires (GMT-3)', offset: -3 },
  { value: 'Atlantic/Stanley', label: 'Stanley (GMT-3)', offset: -3 },
  
  // GMT-2
  { value: 'Atlantic/South_Georgia', label: 'South Georgia (GMT-2)', offset: -2 },
  { value: 'America/Noronha', label: 'Fernando de Noronha (GMT-2)', offset: -2 },
  
  // GMT-1
  { value: 'Atlantic/Azores', label: 'Azores (GMT±0)', offset: 0 },
  { value: 'Atlantic/Cape_Verde', label: 'Cape Verde (GMT-1)', offset: -1 },
  { value: 'Africa/Praia', label: 'Praia (GMT-1)', offset: -1 },
  { value: 'America/Scoresbysund', label: 'Ittoqqortoormiit (GMT-1)', offset: -1 },
  
  // GMT±0
  { value: 'local', label: 'Local Time (GMT±0)', offset: 0 },
  { value: 'UTC', label: 'UTC (GMT±0)', offset: 0 },
  { value: 'Europe/London', label: 'London (GMT±0)', offset: 0 },
  { value: 'Europe/Dublin', label: 'Dublin (GMT±0)', offset: 0 },
  { value: 'Europe/Lisbon', label: 'Lisbon (GMT±0)', offset: 0 },
  { value: 'Africa/Casablanca', label: 'Casablanca (GMT±0)', offset: 0 },
  { value: 'Africa/Abidjan', label: 'Abidjan (GMT±0)', offset: 0 },
  { value: 'Africa/Accra', label: 'Accra (GMT±0)', offset: 0 },
  { value: 'Africa/Bamako', label: 'Bamako (GMT±0)', offset: 0 },
  { value: 'Africa/Banjul', label: 'Banjul (GMT±0)', offset: 0 },
  { value: 'Africa/Bissau', label: 'Bissau (GMT±0)', offset: 0 },
  { value: 'Africa/Conakry', label: 'Conakry (GMT±0)', offset: 0 },
  { value: 'Africa/Dakar', label: 'Dakar (GMT±0)', offset: 0 },
  { value: 'Africa/Freetown', label: 'Freetown (GMT±0)', offset: 0 },
  { value: 'Africa/Lome', label: 'Lomé (GMT±0)', offset: 0 },
  { value: 'Africa/Monrovia', label: 'Monrovia (GMT±0)', offset: 0 },
  { value: 'Africa/Nouakchott', label: 'Nouakchott (GMT±0)', offset: 0 },
  { value: 'Africa/Ouagadougou', label: 'Ouagadougou (GMT±0)', offset: 0 },
  { value: 'Africa/Sao_Tome', label: 'São Tomé (GMT±0)', offset: 0 },
  { value: 'America/Danmarkshavn', label: 'Danmarkshavn (GMT±0)', offset: 0 },
  { value: 'Atlantic/Reykjavik', label: 'Reykjavik (GMT±0)', offset: 0 },
  { value: 'Atlantic/St_Helena', label: 'St Helena (GMT±0)', offset: 0 },
  { value: 'Atlantic/Ascension', label: 'Ascension (GMT±0)', offset: 0 },
  { value: 'Atlantic/Torshavn', label: 'Tórshavn (GMT±0)', offset: 0 },
  { value: 'Atlantic/Madeira', label: 'Funchal (GMT±0)', offset: 0 },
  { value: 'Atlantic/Azores', label: 'Ponta Delgada (GMT±0)', offset: 0 },
  { value: 'Atlantic/Canary', label: 'Canary Islands (GMT±0)', offset: 0 },
  { value: 'Atlantic/Faroe', label: 'Faroe Islands (GMT±0)', offset: 0 },
  { value: 'Europe/Andorra', label: 'Andorra (GMT+1)', offset: 1 },
  { value: 'Europe/Monaco', label: 'Monaco (GMT+1)', offset: 1 },
  { value: 'Europe/Vaduz', label: 'Vaduz (GMT+1)', offset: 1 },
  { value: 'Europe/Luxembourg', label: 'Luxembourg (GMT+1)', offset: 1 },
  { value: 'Europe/Gibraltar', label: 'Gibraltar (GMT+1)', offset: 1 },
  { value: 'Europe/Busingen', label: 'Büsingen (GMT+1)', offset: 1 },
  { value: 'Europe/Mariehamn', label: 'Mariehamn (GMT+2)', offset: 2 },
  { value: 'Africa/El_Aaiun', label: 'Laâyoune (GMT±0)', offset: 0 },
  
  // GMT+1
  { value: 'Europe/Paris', label: 'Paris (GMT+1)', offset: 1 },
  { value: 'Europe/Berlin', label: 'Berlin (GMT+1)', offset: 1 },
  { value: 'Europe/Rome', label: 'Rome (GMT+1)', offset: 1 },
  { value: 'Europe/Madrid', label: 'Madrid (GMT+1)', offset: 1 },
  { value: 'Europe/Amsterdam', label: 'Amsterdam (GMT+1)', offset: 1 },
  { value: 'Europe/Brussels', label: 'Brussels (GMT+1)', offset: 1 },
  { value: 'Europe/Vienna', label: 'Vienna (GMT+1)', offset: 1 },
  { value: 'Europe/Zurich', label: 'Zurich (GMT+1)', offset: 1 },
  { value: 'Europe/Stockholm', label: 'Stockholm (GMT+1)', offset: 1 },
  { value: 'Europe/Oslo', label: 'Oslo (GMT+1)', offset: 1 },
  { value: 'Europe/Copenhagen', label: 'Copenhagen (GMT+1)', offset: 1 },
  { value: 'Europe/Warsaw', label: 'Warsaw (GMT+1)', offset: 1 },
  { value: 'Europe/Prague', label: 'Prague (GMT+1)', offset: 1 },
  { value: 'Europe/Budapest', label: 'Budapest (GMT+1)', offset: 1 },
  { value: 'Europe/Belgrade', label: 'Belgrade (GMT+1)', offset: 1 },
  { value: 'Europe/Zagreb', label: 'Zagreb (GMT+1)', offset: 1 },
  { value: 'Europe/Ljubljana', label: 'Ljubljana (GMT+1)', offset: 1 },
  { value: 'Europe/Sarajevo', label: 'Sarajevo (GMT+1)', offset: 1 },
  { value: 'Europe/Skopje', label: 'Skopje (GMT+1)', offset: 1 },
  { value: 'Europe/Podgorica', label: 'Podgorica (GMT+1)', offset: 1 },
  { value: 'Europe/Tirane', label: 'Tirana (GMT+1)', offset: 1 },
  { value: 'Europe/Valletta', label: 'Valletta (GMT+1)', offset: 1 },
  { value: 'Africa/Lagos', label: 'Lagos (GMT+1)', offset: 1 },
  { value: 'Africa/Algiers', label: 'Algiers (GMT+1)', offset: 1 },
  { value: 'Africa/Tunis', label: 'Tunis (GMT+1)', offset: 1 },
  { value: 'Africa/Niamey', label: 'Niamey (GMT+1)', offset: 1 },
  { value: 'Africa/Porto-Novo', label: 'Porto-Novo (GMT+1)', offset: 1 },
  { value: 'Africa/Malabo', label: 'Malabo (GMT+1)', offset: 1 },
  { value: 'Africa/Libreville', label: 'Libreville (GMT+1)', offset: 1 },
  { value: 'Africa/Brazzaville', label: 'Brazzaville (GMT+1)', offset: 1 },
  { value: 'Africa/Kinshasa', label: 'Kinshasa (GMT+1)', offset: 1 },
  { value: 'Africa/Luanda', label: 'Luanda (GMT+1)', offset: 1 },
  { value: 'Africa/Bangui', label: 'Bangui (GMT+1)', offset: 1 },
  { value: 'Africa/Douala', label: 'Douala (GMT+1)', offset: 1 },
  { value: 'Africa/Ndjamena', label: 'N\'Djamena (GMT+1)', offset: 1 },
  { value: 'Atlantic/Jan_Mayen', label: 'Jan Mayen (GMT+1)', offset: 1 },
  { value: 'Arctic/Longyearbyen', label: 'Longyearbyen (GMT+1)', offset: 1 },
  
  // GMT+2
  { value: 'Europe/Helsinki', label: 'Helsinki (GMT+2)', offset: 2 },
  { value: 'Europe/Kiev', label: 'Kyiv (GMT+2)', offset: 2 },
  { value: 'Europe/Riga', label: 'Riga (GMT+2)', offset: 2 },
  { value: 'Europe/Tallinn', label: 'Tallinn (GMT+2)', offset: 2 },
  { value: 'Europe/Vilnius', label: 'Vilnius (GMT+2)', offset: 2 },
  { value: 'Europe/Sofia', label: 'Sofia (GMT+2)', offset: 2 },
  { value: 'Europe/Bucharest', label: 'Bucharest (GMT+2)', offset: 2 },
  { value: 'Europe/Athens', label: 'Athens (GMT+2)', offset: 2 },
  { value: 'Europe/Kaliningrad', label: 'Kaliningrad (GMT+2)', offset: 2 },
  { value: 'Europe/Mariehamn', label: 'Mariehamn (GMT+2)', offset: 2 },
  { value: 'Asia/Beirut', label: 'Beirut (GMT+2)', offset: 2 },
  { value: 'Asia/Damascus', label: 'Damascus (GMT+2)', offset: 2 },
  { value: 'Asia/Jerusalem', label: 'Jerusalem (GMT+2)', offset: 2 },
  { value: 'Asia/Amman', label: 'Amman (GMT+2)', offset: 2 },
  { value: 'Africa/Cairo', label: 'Cairo (GMT+2)', offset: 2 },
  { value: 'Africa/Johannesburg', label: 'Johannesburg (GMT+2)', offset: 2 },
  { value: 'Africa/Tripoli', label: 'Tripoli (GMT+2)', offset: 2 },
  { value: 'Africa/Khartoum', label: 'Khartoum (GMT+2)', offset: 2 },
  { value: 'Africa/Kigali', label: 'Kigali (GMT+2)', offset: 2 },
  { value: 'Africa/Bujumbura', label: 'Bujumbura (GMT+2)', offset: 2 },
  { value: 'Africa/Lusaka', label: 'Lusaka (GMT+2)', offset: 2 },
  { value: 'Africa/Harare', label: 'Harare (GMT+2)', offset: 2 },
  { value: 'Africa/Maputo', label: 'Maputo (GMT+2)', offset: 2 },
  { value: 'Africa/Windhoek', label: 'Windhoek (GMT+2)', offset: 2 },
  { value: 'Africa/Gaborone', label: 'Gaborone (GMT+2)', offset: 2 },
  { value: 'Africa/Maseru', label: 'Maseru (GMT+2)', offset: 2 },
  { value: 'Africa/Mbabane', label: 'Mbabane (GMT+2)', offset: 2 },
  { value: 'Africa/Blantyre', label: 'Blantyre (GMT+2)', offset: 2 },
  { value: 'Africa/Lilongwe', label: 'Lilongwe (GMT+2)', offset: 2 },
  { value: 'Africa/Lubumbashi', label: 'Lubumbashi (GMT+2)', offset: 2 },
  { value: 'Africa/Juba', label: 'Juba (GMT+3)', offset: 3 },
  
  // GMT+3
  { value: 'Europe/Istanbul', label: 'Istanbul (GMT+3)', offset: 3 },
  { value: 'Europe/Moscow', label: 'Moscow (GMT+3)', offset: 3 },
  { value: 'Europe/Minsk', label: 'Minsk (GMT+3)', offset: 3 },
  { value: 'Europe/Volgograd', label: 'Volgograd (GMT+3)', offset: 3 },
  { value: 'Asia/Riyadh', label: 'Riyadh (GMT+3)', offset: 3 },
  { value: 'Asia/Qatar', label: 'Doha (GMT+3)', offset: 3 },
  { value: 'Asia/Bahrain', label: 'Manama (GMT+3)', offset: 3 },
  { value: 'Asia/Kuwait', label: 'Kuwait City (GMT+3)', offset: 3 },
  { value: 'Asia/Baghdad', label: 'Baghdad (GMT+3)', offset: 3 },
  { value: 'Asia/Aden', label: 'Aden (GMT+3)', offset: 3 },
  { value: 'Africa/Addis_Ababa', label: 'Addis Ababa (GMT+3)', offset: 3 },
  { value: 'Africa/Nairobi', label: 'Nairobi (GMT+3)', offset: 3 },
  { value: 'Africa/Dar_es_Salaam', label: 'Dar es Salaam (GMT+3)', offset: 3 },
  { value: 'Africa/Kampala', label: 'Kampala (GMT+3)', offset: 3 },
  { value: 'Africa/Djibouti', label: 'Djibouti (GMT+3)', offset: 3 },
  { value: 'Africa/Asmara', label: 'Asmara (GMT+3)', offset: 3 },
  { value: 'Africa/Mogadishu', label: 'Mogadishu (GMT+3)', offset: 3 },
  { value: 'Africa/Antananarivo', label: 'Antananarivo (GMT+3)', offset: 3 },
  { value: 'Africa/Juba', label: 'Juba (GMT+3)', offset: 3 },
  { value: 'Indian/Mayotte', label: 'Mayotte (GMT+3)', offset: 3 },
  { value: 'Indian/Comoro', label: 'Comoros (GMT+3)', offset: 3 },
  
  // GMT+3:30
  { value: 'Asia/Tehran', label: 'Tehran (GMT+3:30)', offset: 3.5 },
  
  // GMT+4
  { value: 'Europe/Samara', label: 'Samara (GMT+4)', offset: 4 },
  { value: 'Europe/Saratov', label: 'Saratov (GMT+4)', offset: 4 },
  { value: 'Europe/Ulyanovsk', label: 'Ulyanovsk (GMT+4)', offset: 4 },
  { value: 'Europe/Astrakhan', label: 'Astrakhan (GMT+4)', offset: 4 },
  { value: 'Asia/Dubai', label: 'Dubai (GMT+4)', offset: 4 },
  { value: 'Asia/Muscat', label: 'Muscat (GMT+4)', offset: 4 },
  { value: 'Asia/Yerevan', label: 'Yerevan (GMT+4)', offset: 4 },
  { value: 'Asia/Baku', label: 'Baku (GMT+4)', offset: 4 },
  { value: 'Asia/Tbilisi', label: 'Tbilisi (GMT+4)', offset: 4 },
  { value: 'Africa/Victoria', label: 'Victoria (GMT+4)', offset: 4 },
  { value: 'Africa/Mauritius', label: 'Mauritius (GMT+4)', offset: 4 },
  { value: 'Africa/Port_Louis', label: 'Port Louis (GMT+4)', offset: 4 },
  { value: 'Africa/Saint_Denis', label: 'Saint Denis (GMT+4)', offset: 4 },
  { value: 'Indian/Reunion', label: 'Réunion (GMT+4)', offset: 4 },
  { value: 'Indian/Seychelles', label: 'Seychelles (GMT+4)', offset: 4 },
  { value: 'Indian/Mahe', label: 'Mahé (GMT+4)', offset: 4 },
  { value: 'Asia/Dubai', label: 'Dubai (GMT+4)', offset: 4 },
  { value: 'Asia/Muscat', label: 'Muscat (GMT+4)', offset: 4 },
  
  // GMT+4:30
  { value: 'Asia/Kabul', label: 'Kabul (GMT+4:30)', offset: 4.5 },
  
  // GMT+5
  { value: 'Europe/Yekaterinburg', label: 'Yekaterinburg (GMT+5)', offset: 5 },
  { value: 'Asia/Karachi', label: 'Karachi (GMT+5)', offset: 5 },
  { value: 'Asia/Tashkent', label: 'Tashkent (GMT+5)', offset: 5 },
  { value: 'Asia/Dushanbe', label: 'Dushanbe (GMT+5)', offset: 5 },
  { value: 'Asia/Ashgabat', label: 'Ashgabat (GMT+5)', offset: 5 },
  { value: 'Asia/Aqtau', label: 'Aqtau (GMT+5)', offset: 5 },
  { value: 'Asia/Aqtobe', label: 'Aqtöbe (GMT+5)', offset: 5 },
  { value: 'Asia/Atyrau', label: 'Atyrau (GMT+5)', offset: 5 },
  { value: 'Asia/Oral', label: 'Oral (GMT+5)', offset: 5 },
  { value: 'Indian/Maldives', label: 'Maldives (GMT+5)', offset: 5 },
  { value: 'Indian/Kerguelen', label: 'Kerguelen (GMT+5)', offset: 5 },
  { value: 'Indian/Maldives', label: 'Maldives (GMT+5)', offset: 5 },
  
  // GMT+5:30
  { value: 'Asia/Mumbai', label: 'Mumbai (GMT+5:30)', offset: 5.5 },
  { value: 'Asia/Delhi', label: 'New Delhi (GMT+5:30)', offset: 5.5 },
  { value: 'Asia/Kolkata', label: 'Kolkata (GMT+5:30)', offset: 5.5 },
  { value: 'Asia/Colombo', label: 'Colombo (GMT+5:30)', offset: 5.5 },
  
  // GMT+5:45
  { value: 'Asia/Kathmandu', label: 'Kathmandu (GMT+5:45)', offset: 5.75 },
  
  // GMT+6
  { value: 'Europe/Omsk', label: 'Omsk (GMT+6)', offset: 6 },
  { value: 'Asia/Dhaka', label: 'Dhaka (GMT+6)', offset: 6 },
  { value: 'Asia/Thimphu', label: 'Thimphu (GMT+6)', offset: 6 },
  { value: 'Asia/Bishkek', label: 'Bishkek (GMT+6)', offset: 6 },
  { value: 'Asia/Novokuznetsk', label: 'Novokuznetsk (GMT+7)', offset: 7 },
  { value: 'Asia/Barnaul', label: 'Barnaul (GMT+7)', offset: 7 },
  { value: 'Asia/Tomsk', label: 'Tomsk (GMT+7)', offset: 7 },
  { value: 'Asia/Novosibirsk', label: 'Novosibirsk (GMT+7)', offset: 7 },
  { value: 'Asia/Krasnoyarsk', label: 'Krasnoyarsk (GMT+7)', offset: 7 },
  { value: 'Indian/Chagos', label: 'Chagos (GMT+6)', offset: 6 },
  
  // GMT+6:30
  { value: 'Asia/Yangon', label: 'Yangon (GMT+6:30)', offset: 6.5 },
  { value: 'Indian/Cocos', label: 'Cocos Islands (GMT+6:30)', offset: 6.5 },
  
  // GMT+7
  { value: 'Europe/Novosibirsk', label: 'Novosibirsk (GMT+7)', offset: 7 },
  { value: 'Europe/Krasnoyarsk', label: 'Krasnoyarsk (GMT+7)', offset: 7 },
  { value: 'Asia/Bangkok', label: 'Bangkok (GMT+7)', offset: 7 },
  { value: 'Asia/Jakarta', label: 'Jakarta (GMT+7)', offset: 7 },
  { value: 'Asia/Ho_Chi_Minh', label: 'Ho Chi Minh City (GMT+7)', offset: 7 },
  { value: 'Asia/Vientiane', label: 'Vientiane (GMT+7)', offset: 7 },
  { value: 'Asia/Phnom_Penh', label: 'Phnom Penh (GMT+7)', offset: 7 },
  { value: 'Asia/Hovd', label: 'Hovd (GMT+7)', offset: 7 },
  { value: 'Asia/Novokuznetsk', label: 'Novokuznetsk (GMT+7)', offset: 7 },
  { value: 'Asia/Barnaul', label: 'Barnaul (GMT+7)', offset: 7 },
  { value: 'Asia/Tomsk', label: 'Tomsk (GMT+7)', offset: 7 },
  { value: 'Asia/Novosibirsk', label: 'Novosibirsk (GMT+7)', offset: 7 },
  { value: 'Asia/Krasnoyarsk', label: 'Krasnoyarsk (GMT+7)', offset: 7 },
  { value: 'Asia/Pontianak', label: 'Pontianak (GMT+7)', offset: 7 },
  { value: 'Indian/Christmas', label: 'Christmas Island (GMT+7)', offset: 7 },
  
  // GMT+8
  { value: 'Europe/Irkutsk', label: 'Irkutsk (GMT+8)', offset: 8 },
  { value: 'Europe/Chita', label: 'Chita (GMT+8)', offset: 8 },
  { value: 'Asia/Shanghai', label: 'Shanghai (GMT+8)', offset: 8 },
  { value: 'Asia/Hong_Kong', label: 'Hong Kong (GMT+8)', offset: 8 },
  { value: 'Asia/Singapore', label: 'Singapore (GMT+8)', offset: 8 },
  { value: 'Asia/Manila', label: 'Manila (GMT+8)', offset: 8 },
  { value: 'Asia/Kuala_Lumpur', label: 'Kuala Lumpur (GMT+8)', offset: 8 },
  { value: 'Asia/Taipei', label: 'Taipei (GMT+8)', offset: 8 },
  { value: 'Asia/Ulaanbaatar', label: 'Ulaanbaatar (GMT+8)', offset: 8 },
  { value: 'Asia/Choibalsan', label: 'Choibalsan (GMT+8)', offset: 8 },
  { value: 'Asia/Makassar', label: 'Makassar (GMT+8)', offset: 8 },
  { value: 'Asia/Kuching', label: 'Kuching (GMT+8)', offset: 8 },
  { value: 'Asia/Brunei', label: 'Bandar Seri Begawan (GMT+8)', offset: 8 },
  { value: 'Asia/Irkutsk', label: 'Irkutsk (GMT+8)', offset: 8 },
  { value: 'Asia/Chita', label: 'Chita (GMT+8)', offset: 8 },
  { value: 'Australia/Perth', label: 'Perth (GMT+8)', offset: 8 },
  
  // GMT+8:45
  { value: 'Australia/Eucla', label: 'Eucla (GMT+8:45)', offset: 8.75 },
  
  // GMT+9
  { value: 'Europe/Yakutsk', label: 'Yakutsk (GMT+9)', offset: 9 },
  { value: 'Asia/Tokyo', label: 'Tokyo (GMT+9)', offset: 9 },
  { value: 'Asia/Seoul', label: 'Seoul (GMT+9)', offset: 9 },
  { value: 'Asia/Dili', label: 'Dili (GMT+9)', offset: 9 },
  { value: 'Asia/Jayapura', label: 'Jayapura (GMT+9)', offset: 9 },
  { value: 'Asia/Khandyga', label: 'Khandyga (GMT+9)', offset: 9 },
  { value: 'Asia/Yakutsk', label: 'Yakutsk (GMT+9)', offset: 9 },
  { value: 'Asia/Khandyga', label: 'Khandyga (GMT+9)', offset: 9 },
  { value: 'Pacific/Palau', label: 'Palau (GMT+9)', offset: 9 },
  { value: 'Asia/Palau', label: 'Palau (GMT+9)', offset: 9 },
  
  // GMT+9:30
  { value: 'Australia/Adelaide', label: 'Adelaide (GMT+9:30)', offset: 9.5 },
  { value: 'Australia/Darwin', label: 'Darwin (GMT+9:30)', offset: 9.5 },
  { value: 'Australia/Broken_Hill', label: 'Broken Hill (GMT+9:30)', offset: 9.5 },
  
  // GMT+10
  { value: 'Europe/Vladivostok', label: 'Vladivostok (GMT+10)', offset: 10 },
  { value: 'Europe/Magadan', label: 'Magadan (GMT+10)', offset: 10 },
  { value: 'Europe/Sakhalin', label: 'Sakhalin (GMT+10)', offset: 10 },
  { value: 'Europe/Ust-Nera', label: 'Ust-Nera (GMT+10)', offset: 10 },
  { value: 'Asia/Vladivostok', label: 'Vladivostok (GMT+10)', offset: 10 },
  { value: 'Asia/Sakhalin', label: 'Yuzhno-Sakhalinsk (GMT+10)', offset: 10 },
  { value: 'Asia/Magadan', label: 'Magadan (GMT+10)', offset: 10 },
  { value: 'Asia/Ust-Nera', label: 'Ust-Nera (GMT+10)', offset: 10 },
  { value: 'Australia/Sydney', label: 'Sydney (GMT+10)', offset: 10 },
  { value: 'Australia/Melbourne', label: 'Melbourne (GMT+10)', offset: 10 },
  { value: 'Australia/Brisbane', label: 'Brisbane (GMT+10)', offset: 10 },
  { value: 'Australia/Hobart', label: 'Hobart (GMT+10)', offset: 10 },
  { value: 'Australia/Canberra', label: 'Canberra (GMT+10)', offset: 10 },
  { value: 'Australia/Melbourne', label: 'Melbourne (GMT+10)', offset: 10 },
  { value: 'Australia/Sydney', label: 'Sydney (GMT+10)', offset: 10 },
  { value: 'Australia/Brisbane', label: 'Brisbane (GMT+10)', offset: 10 },
  { value: 'Australia/Lindeman', label: 'Lindeman (GMT+10)', offset: 10 },
  { value: 'Australia/Hobart', label: 'Hobart (GMT+10)', offset: 10 },
  { value: 'Australia/Currie', label: 'Currie (GMT+10)', offset: 10 },
  { value: 'Pacific/Guam', label: 'Guam (GMT+10)', offset: 10 },
  { value: 'Pacific/Saipan', label: 'Saipan (GMT+10)', offset: 10 },
  { value: 'Pacific/Chuuk', label: 'Chuuk (GMT+10)', offset: 10 },
  { value: 'Pacific/Port_Moresby', label: 'Port Moresby (GMT+10)', offset: 10 },
  { value: 'Pacific/Saipan', label: 'Saipan (GMT+10)', offset: 10 },
  { value: 'Asia/Ust-Nera', label: 'Ust-Nera (GMT+10)', offset: 10 },
  { value: 'Asia/Khandyga', label: 'Khandyga (GMT+9)', offset: 9 },
  { value: 'Asia/Sakhalin', label: 'Yuzhno-Sakhalinsk (GMT+10)', offset: 10 },
  { value: 'Asia/Magadan', label: 'Magadan (GMT+10)', offset: 10 },
  { value: 'Asia/Ust-Nera', label: 'Ust-Nera (GMT+10)', offset: 10 },
  
  // GMT+10:30
  { value: 'Australia/Lord_Howe', label: 'Lord Howe Island (GMT+10:30)', offset: 10.5 },
  { value: 'Pacific/Lord_Howe', label: 'Lord Howe Island (GMT+10:30)', offset: 10.5 },
  
  // GMT+11
  { value: 'Pacific/Noumea', label: 'Nouméa (GMT+11)', offset: 11 },
  { value: 'Pacific/Port_Vila', label: 'Port Vila (GMT+11)', offset: 11 },
  { value: 'Pacific/Norfolk', label: 'Norfolk Island (GMT+11)', offset: 11 },
  { value: 'Pacific/Kosrae', label: 'Kosrae (GMT+11)', offset: 11 },
  { value: 'Pacific/Pohnpei', label: 'Pohnpei (GMT+11)', offset: 11 },
  { value: 'Pacific/Efate', label: 'Efate (GMT+11)', offset: 11 },
  
  // GMT+12
  { value: 'Europe/Kamchatka', label: 'Petropavlovsk-Kamchatsky (GMT+12)', offset: 12 },
  { value: 'Asia/Kamchatka', label: 'Petropavlovsk-Kamchatsky (GMT+12)', offset: 12 },
  { value: 'Asia/Anadyr', label: 'Anadyr (GMT+12)', offset: 12 },
  { value: 'Pacific/Auckland', label: 'Auckland (GMT+12)', offset: 12 },
  { value: 'Pacific/Wellington', label: 'Wellington (GMT+12)', offset: 12 },
  { value: 'Pacific/Christchurch', label: 'Christchurch (GMT+12)', offset: 12 },
  { value: 'Pacific/Fiji', label: 'Fiji (GMT+12)', offset: 12 },
  { value: 'Pacific/Kwajalein', label: 'Kwajalein (GMT+12)', offset: 12 },
  { value: 'Pacific/Majuro', label: 'Majuro (GMT+12)', offset: 12 },
  { value: 'Pacific/Tarawa', label: 'Tarawa (GMT+12)', offset: 12 },
  { value: 'Pacific/Funafuti', label: 'Funafuti (GMT+12)', offset: 12 },
  { value: 'Pacific/Kwajalein', label: 'Kwajalein (GMT+12)', offset: 12 },
  { value: 'Pacific/Majuro', label: 'Majuro (GMT+12)', offset: 12 },
  { value: 'Pacific/Fakaofo', label: 'Fakaofo (GMT+13)', offset: 13 },
  { value: 'Pacific/Funafuti', label: 'Funafuti (GMT+12)', offset: 12 },
  { value: 'Pacific/Kanton', label: 'Kanton (GMT+12)', offset: 12 },
  { value: 'Pacific/Kiritimati', label: 'Kiritimati (GMT+14)', offset: 14 },
  { value: 'Pacific/Wake', label: 'Wake Island (GMT+12)', offset: 12 },
  { value: 'Pacific/Wallis', label: 'Wallis (GMT+12)', offset: 12 },
  
  // GMT+12:45
  { value: 'Pacific/Chatham', label: 'Chatham Islands (GMT+12:45)', offset: 12.75 },
  
  // GMT+13
  { value: 'Pacific/Nuku_Alofa', label: 'Nukuʻalofa (GMT+13)', offset: 13 },
  { value: 'Pacific/Apia', label: 'Apia (GMT+13)', offset: 13 },
  { value: 'Pacific/Tongatapu', label: 'Tongatapu (GMT+13)', offset: 13 },
  { value: 'Pacific/Fakaofo', label: 'Fakaofo (GMT+13)', offset: 13 },
  
  // GMT+14
  { value: 'Pacific/Kiritimati', label: 'Kiritimati (GMT+14)', offset: 14 }
];

// Create setRotation function to rotate a DOM element around its center point
function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

// Initialize timezone selector
function initializeTimezoneSelector() {
  const select = timezoneSelect;
  select.innerHTML = '';
  
  timezoneData.forEach(tz => {
    const option = document.createElement('option');
    option.value = tz.value;
    option.textContent = tz.label;
    select.appendChild(option);
  });
  
  // Set initial value to local time
  select.value = 'local';
}

// Search functionality
function searchTimezones(query) {
  const select = timezoneSelect;
  const lowerQuery = query.toLowerCase();
  
  // Clear existing options
  select.innerHTML = '';
  
  // Filter and add matching timezones
  const filtered = timezoneData.filter(tz => 
    tz.label.toLowerCase().includes(lowerQuery) ||
    tz.value.toLowerCase().includes(lowerQuery)
  );
  
  filtered.forEach(tz => {
    const option = document.createElement('option');
    option.value = tz.value;
    option.textContent = tz.label;
    select.appendChild(option);
  });
  
  // If no results, show message
  if (filtered.length === 0) {
    const option = document.createElement('option');
    option.value = '';
    option.textContent = 'No timezones found';
    option.disabled = true;
    select.appendChild(option);
  }
}


// Get current time for selected timezone
function getTimeForTimezone(timezone) {
  if (timezone === 'local') {
    return new Date();
  }
  
  try {
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    
    // Find timezone data
    const tzData = timezoneData.find(tz => tz.value === timezone);
    const offset = tzData ? tzData.offset : 0;
    
    return new Date(utcTime + (offset * 3600000));
  } catch (error) {
    return new Date();
  }
}

// Update calendar display
function updateCalendar(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                  'July', 'August', 'September', 'October', 'November', 'December'];
  
  const dayName = days[date.getDay()];
  const dateNumber = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  dayNameElement.textContent = dayName;
  dateNumberElement.textContent = dateNumber.toString().padStart(2, '0');
  monthYearElement.textContent = `${month} ${year}`;
  fullDateElement.textContent = `${dayName}, ${month} ${dateNumber}, ${year}`;
  
  // Update digital time with format toggle
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  if (is24HourFormat) {
    digitalTimeElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  } else {
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    digitalTimeElement.textContent = `${displayHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
  }
}

// Implement the setClock function to update the positions of the hour, minute, and second hands
function setClock() {
  const currentDate = getTimeForTimezone(currentTimezone);
  const seconds = (currentDate.getSeconds() + currentDate.getMilliseconds() / 1000) / 60;
  const minutes = (seconds + currentDate.getMinutes()) / 60;
  const hours = (minutes + currentDate.getHours()) / 12;
  
  setRotation(secondHand, seconds);
  setRotation(minuteHand, minutes);
  setRotation(hourHand, hours);
  
  // Update calendar
  updateCalendar(currentDate);
}

// Handle timezone selection change
timezoneSelect.addEventListener('change', (e) => {
  currentTimezone = e.target.value;
  const selectedOption = e.target.options[e.target.selectedIndex];
  currentTimezoneDisplay.textContent = selectedOption.text;
  setClock();
});

// Handle search input
timezoneSearch.addEventListener('input', (e) => {
  const query = e.target.value;
  if (query.length > 0) {
    searchTimezones(query);
  } else {
    initializeTimezoneSelector();
  }
});

// Handle format toggle
formatToggle.addEventListener('change', (e) => {
  is24HourFormat = e.target.checked;
  setClock();
});

// Update the clock continuously for smooth second hand movement
setInterval(setClock, 100);

// Initialize the clock and timezone selector when the page loads
initializeTimezoneSelector();
setClock();
