# API LINKS

- API DOCS: http://fitnesstrac-kr.herokuapp.com/docs
- API ENDPOINTS: http://fitnesstrac-kr.herokuapp.com/api/some-endpoint
    - Above where "some-endpoint", enter necessary api endpoint

# Github Organizations and Git Workflow
## Setting up Your Github Org

Please follow the below instructions to set-up your Github organization and repo (note: only one person per team needs to do this).

## Creating a Github Organization

    Go to github
    Click the “+” button in the upper righthand corner
    Select “New organization” from the dropdown
    Select the free tier
    Input a name for your organization (eg graceshopper-team-awesome)
    Input your personal email, select “My personal account”, and click “Next”
    Add all your teammates to this organization by searching for their Github usernames. Please also add your fellow and your instructor (my username is nlane). Note you can add people after this step, so feel free to continue on if you’re missing some usernames.
    Click “Complete set-up”
    No need to fill out this next page (“Welcome to Github”). You can scroll to the bottom and click “Submit”.

## Creating and Initializing your repo

    Go to your organizations homepage (eg https://github.com/graceshopper-team-awesome)
    Select the green button “Create a new repository”
    Enter the name of your repository (eg graceshopper-project)
    Select “Public” for the visibility
    Select “Create Repository” (create a blank repo, do not check any boxes that add default files).
    Copy the URL of your repo and clone it to your local machine: git clone https://github.com/YOUR-PROJECT-URL.git
    cd into your new repo’s folder

* Follow the instructions from the Boilermaker repo where you will be instructed to run these commands:
* git remote add boilermaker https://github.com/FullstackAcademy/boilermaker.git
* git fetch boilermaker
* git merge boilermaker/master

    Run one more command: git push origin master or git push origin main
    Refresh your Github page and you should see your repo initialized with the boilerplate code.

## Protect your Master Branch

    From your repo’s github page, select “Settings” (rightmost option under the repo name)
    On the sidebar, select “Branches”
    Click “Add rule”
    Put master in the text field for “Branch name pattern”
    Select two checkboxes: “Require pull request reviews before merging” and “Include administrators”.
    Finish by selecting “Create”

# GitHub Workflow
## Feature Branches

    High level overview: pull latest main, make a branch, commit changes, push to GitHub, make a PR, get it approved, merge it to main. Rinse and repeat.
    Make issue corresponding to feature
    git checkout main
    git pull to get main up to date
    git checkout -b YOUR-NEW-BRANCH-NAME to switch to a new branch
    Make commits for a given feature.

    Use semantic commit messages: type(scope): message e.g. feat(client): switch to React-Redux
    Keep commits related to that feature branch. If you need to make other commits, go back to main, make a new branch, add those separate commits etc…

    When you are done, git push -u origin YOUR-NEW-BRANCH-NAME
    Navigate to GitHub
    Select “open pull request”
    Refer to any issues the PR will close, e.g. Closes #32, closes #46. You need to use “closes” for each issue separately.
    Request a review
    Address review comments by pushing more commits
    When all checks pass, merge to main
    On your local machine, git checkout main
    git pull
    Start the cycle again

## Merge Conflicts

GitHub has an online merge conflict resolution tool, but you can and should learn how to fix merge conflicts locally too.

    On your local machine, git checkout main
    git pull
    git checkout YOUR-FEATURE-BRANCH
    git merge main
    git status
    Find all conflicts and fix them manually. Collaborate / communicate with teammates to decide how best to do so!
    git add -A
    git commit
    git push
    Check that the PR now has no conflicts.
