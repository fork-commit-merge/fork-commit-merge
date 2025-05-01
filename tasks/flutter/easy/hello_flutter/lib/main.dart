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
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text('Fork, Commit, Merge'),
          backgroundColor: Colors.cyanAccent,
        ),
        body: Center(
          child: Text('Hello, Flutter!', style: TextStyle(fontSize: 36)),
        ),
      ),
    );
  }
}
