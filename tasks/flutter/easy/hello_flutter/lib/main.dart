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
        appBar: AppBar(
          title: const Center(
            child: Text(
              'Fork-Commit-Merge',
              style: TextStyle(
                  color: Colors.black,
                  fontSize: 30,
                  fontWeight: FontWeight.bold),
            ),
          ),
        ),
        body: const Center(
          child: Text(
            'Hello',
            style: TextStyle(
                color: Colors.black, fontSize: 20, fontWeight: FontWeight.bold),
          ),
        ),
      ),
    );
  }
}
