#include <bits/stdc++.h>
using namespace std;

// A cpp function that returns topological sorting of a DAG (Directed Acyclic Graph)
vector<int> topoSort(int V, vector<int> adj[]) 
	{
	    queue<int> q;
	    int indeg[V]={};
	    for(int i=0;i<V;i++)
	        for(int u:adj[i])
	            ++indeg[u];

	    for(int i=0;i<V;i++){
	        if(indeg[i]==0)q.push(i);
	    }
	    vector<int> x;

	    while(q.size()!=0){
	        int f=q.front();
	        q.pop();
	        x.push_back(f);

	        for(int u:adj[f]){
	            --indeg[u];

	            if(indeg[u]==0)q.push(u);
	        }
	    }
	    return x; // Returns vector of topoplogically sorted node elements
	}
