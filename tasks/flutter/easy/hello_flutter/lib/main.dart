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
          title: const Text("Fork, Commit, Merge"),
        ),
        body: const Center(
          child: Text("Hello, Flutter!"),
        ),
      ),
    );
  }
}
