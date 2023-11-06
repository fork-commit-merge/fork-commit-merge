# Fork, Commit, Merge - Easy Issue (Blazor)

## Blazor Counter Component Customization
*Note: You don't have ask permission to start solving the issue or get assigned, since these issues are supposed to be always open for new contributors. The actions-user bot will reset the file back to previous state for the next contributor after your commit is merged. So you can just simply start working with the issue right away!*

### How to get started:
Navigate to the `tasks/blazor/easy` directory from the root of your project.

Create a new Blazor Server App by running:
```bash
dotnet new blazorserver -o BlazorCounterCustomization
```
Navigate to the project directory:
```bash
cd BlazorCounterCustomization
```

#### Description:

Modify the default Blazor server application to include a new feature on the counter component, allowing users to set a custom increment value.

#### Requirements:

-   Create a new Blazor Server Application.
-   Navigate to the Counter component.
-   Add a new input field that accepts numeric values.
-   Allow the user to set the increment value for the counter through this field.
-   Update the counter to increase by the user-defined increment value each time the button is clicked.
-   Ensure that the counter does not accept negative increment values.
-   Display an error message if the user attempts to set a negative increment value.

#### Acceptance Criteria:

-   The counter should increment by 1 by default.
-   Users can change the increment value.
-   The counter reflects the new increment value immediately after it's set.
-   No negative increment values should be accepted.

For the solution, you would need to modify the `Counter.razor` file in your Blazor Server Application.

---

To test the program you have to first make sure you are in the right directory:
```bash
cd tasks/blazor/easy/BlazorCounterCustomization
```

Then you can run the program with the command:
```bash
dotnet run
```

Open a browser and navigate to https://localhost:5001/ to view the application.
If the program works as requested in the task, you are ready to make a pull request!

---

To work with this issue, you need to have Dotnet SDK installed to your local machine.
Check out [README.md](https://github.com/nikohoffren/fork-commit-merge/blob/main/README.md) for more instructions of installing Dotnet SDK and how to make a pull request.

Feel free to ask any questions here if you have some problems!

#### Also, kindly give this project a star to enhance its visibility for new developers!
