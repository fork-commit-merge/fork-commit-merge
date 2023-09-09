// Flutter - Easy

import 'package:flutter/material.dart';

void main() {
  runApp(const ForkCommitMerge());
}

class ForkCommitMerge extends StatelessWidget {
  const ForkCommitMerge({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
          home: Scaffold(
          appBar:AppBar(
            title: Text("Fork,Commit,Merge",style:TextStyle(color: Colors.white)),
            backgroundColor: Colors.purple[400],
            centerTitle: true,
          ),
          body:Center(
              child: Text("Hello,Flutter!",style:TextStyle(color:Colors.black)),
            ),
      ),
    );
  }
}
