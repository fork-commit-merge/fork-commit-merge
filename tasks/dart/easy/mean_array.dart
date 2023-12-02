void main() {
  List<int> data = [5, 10, 15, 20, 25];
  double mean = calculateMean(data);
  print('Mean: $mean');  // Expected output: Mean: 15.0
}
double calculateMean(List<int>a){
  double ans=0;
  for(int i=0;i<a.length;i++){
    ans+=a[i];
  }
  if(a.length!=0){
    return (ans/a.length).toDouble();
  }
  return 0.0
}

// TODO: Implement a function called 'calculateMean' that takes a list of integers as input and returns the mean as a double.

