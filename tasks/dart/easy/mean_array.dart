void main() {
  List<int> data = [5, 10, 15, 20, 25];
  double mean = calculateMean(data);
  print('Mean: $mean');  // Expected output: Mean: 15.0
}

double calculateMean(List<int> arg){
  int sum = 0;
  for(var i=0; i<arg.length; i++){
    sum = arg[i] + sum;
  }
  return sum/arg.length;

}