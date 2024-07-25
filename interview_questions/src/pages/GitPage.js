import { QAReturn } from "../components/QAReturn";

export const GitPage = () => {
  const QA = [
    {
      Q: `What is git?`,
      A: `Git is a distributed version control system for tracking changes in source code during software development.`,
    },
    {
      Q: `What is a distributed version control system?`,
      A: `A distributed version control system allows multiple developers to work on a project simultaneously, with each having a local copy of the entire repository.`,
    },
    {
      Q: `What are advantages of using version control system?`,
      A: `Advantages include tracking changes, collaboration, maintaining a history of project revisions, and branching/merging capabilities.`,
    },
    {
      Q: `What is the difference between git and svn?`,
      A: `Git is distributed, allowing local repositories; SVN is centralized, requiring a single central repository.`,
    },
    {
      Q: `What is the difference between git and GitHub?`,
      A: `Git is a version control system; GitHub is a cloud-based platform for hosting Git repositories and collaborating on code.`,
    },
    {
      Q: `What language is used in git?`,
      A: `Git is written in C.`,
    },
    {
      Q: `Mention various git repository hosting functions?`,
      A: `Hosting functions include GitHub, GitLab, Bitbucket, and AWS CodeCommit.`,
    },
    {
      Q: `What is a repository in git?`,
      A: `A repository is a storage space where your project's files and their revision history are kept.`,
    },
    {
      Q: `What is a bare repository in git?`,
      A: `A bare repository is a repository that doesn't have a working directory and is used for sharing.`,
    },
    {
      Q: `What is a commit message?`,
      A: `A commit message is a brief description of changes made in a commit.`,
    },
    {
      Q: `Explain some basic git commands?`,
      A: `git init initializes a repository; git status shows the status; git clone copies a repository; git add stages changes; git commit saves changes; git push origin master uploads changes to the master branch.`,
    },
    {
      Q: `How do you fix a broken commit?`,
      A: `Use git commit --amend to modify the commit, or git revert to create a new commit that undoes the changes.`,
    },
    {
      Q: `What is a conflict in git?`,
      A: `A conflict occurs when changes from different branches contradict each other.`,
    },
    {
      Q: `How do you resolve a conflict in git?`,
      A: `Manually edit the conflicting files, then stage and commit the resolved files.`,
    },
    {
      Q: `How do you revert a commit that has already been pushed and made public?`,
      A: `Use git revert to create a new commit that undoes the changes of the previous commit.`,
    },
    {
      Q: `What is subgit?`,
      A: `SubGit is a tool for migrating from SVN to Git and keeping them in sync.`,
    },
    {
      Q: `What is the difference between git pull and git fetch?`,
      A: `git fetch retrieves updates from the remote but doesn't merge; git pull fetches and merges updates.`,
    },
    {
      Q: `What is the staging area or index?`,
      A: `The staging area is a space where changes are prepared before a commit.`,
    },
    {
      Q: `What is the use of git instaweb?`,
      A: `git instaweb sets up a temporary web server to browse the repository.`,
    },
    {
      Q: `What is git ls-tree?`,
      A: `git ls-tree lists the contents of a tree object in Git, showing file mode, type, and blob SHA-1.`,
    },
    {
      Q: `What is git stash?`,
      A: `git stash temporarily shelves changes you've made to your working directory, so you can work on something else, then come back and re-apply them later.`,
    },
    {
      Q: `What is the function of git stash apply?`,
      A: `git stash apply reapplies the most recently stashed changes to the working directory.`,
    },
    {
      Q: `What work is recovered when a deleted branch is recovered?`,
      A: `Recovering a deleted branch recovers its commit history and changes that were made on that branch.`,
    },
    {
      Q: `Explain the difference between git status and git diff?`,
      A: `git status shows the current state of the working directory and staging area; git diff shows the changes between commits, the index, and the working tree.`,
    },
    {
      Q: `Mention the difference between git clone and git remote?`,
      A: `git clone copies a repository from a remote source to your local machine; git remote manages connections to remote repositories.`,
    },
    {
      Q: `What is git stash drop?`,
      A: `git stash drop deletes a stashed state, removing it from the stash list.`,
    },
    {
      Q: `How do you find a list of files that have been changed during a commit?`,
      A: `Use git diff --name-only HEAD~1 to list files changed in the last commit.`,
    },
    {
      Q: `What is the function of git config?`,
      A: `git config sets configuration variables for Git, like user information or repository settings.`,
    },
    {
      Q: `What does a commit object contain?`,
      A: `A commit object contains metadata such as author, committer, commit message, and pointers to the tree objects representing the project state.`,
    },
    {
      Q: `Describe the branching strategies that you have used?`,
      A: `Branching strategies include feature branching, git flow, trunk-based development, and release branching.`,
    },
    {
      Q: `Explain the advantages of forking workflow?`,
      A: `Forking workflow allows contributors to work independently on their copies of a repository, contributing changes via pull requests. It enhances collaboration and maintains a clean project history.`,
    },
    {
      Q: `How to check whether a branch is already merged with the master?`,
      A: `Use git branch --merged master to check which branches are merged into the master branch.`,
    },
    {
      Q: `Why is it desirable to create an additional commit rather than amending an existing commit?`,
      A: `Creating an additional commit preserves the history and allows each commit to represent a meaningful change, making it easier to track changes and revert if necessary.`,
    },
    {
      Q: `What does hook comprise in git?`,
      A: `Hooks in Git are scripts that execute automatically before or after certain Git events, allowing customization of workflows.`,
    },
    {
      Q: `How do you open a commit that has just been pushed and made open?`,
      A: `Use git revert to create a new commit that undoes the changes introduced by the specified commit.`,
    },
    {
      Q: `How to remove a file from git without removing it from your file system?`,
      A: `Use git rm --cached <file> to remove a file from the Git index without deleting it from the filesystem.`,
    },
    {
      Q: `Could you explain the git workflow?`,
      A: `Git workflow includes staging changes with git add, committing changes with git commit, pushing changes with git push, and pulling changes with git pull. It also involves branching, merging, and managing remote repositories.`,
    },
    {
      Q: `Explain the difference between the head, working tree, and index?`,
      A: `HEAD points to the current commit; the working tree is where files are manipulated; the index (staging area) is a snapshot of files to be committed.`,
    },
    {
      Q: `Explain the difference between fork, branch, and clone?`,
      A: `Fork creates a copy of a repository on a server-side platform like GitHub; clone copies a repository from a remote source to your local machine; branch is a parallel version of a repository's codebase within the same repository.`,
    },
    {
      Q: `What are the different ways by which you can refer to a commit?`,
      A: `Commits can be referred to by SHA-1 hash, branch names, tags, relative references (HEAD~1), or symbolic references (master, origin/master).`,
    },
    {
      Q: `What is the difference between rebasing and merge?`,
      A: `Rebasing integrates changes from one branch into another by reapplying commits on top of another base branch, resulting in a linear history. Merging combines changes from different branches, preserving the history of each branch.`,
    },
    {
      Q: `Mention the difference between revert and reset?`,
      A: `Revert creates a new commit that undoes the changes of a specific commit, preserving history. Reset moves the HEAD and branch pointers to a different commit, potentially discarding commits.`,
    },
    {
      Q: `How to squash last N commits into a single commit?`,
      A: `To squash the last N commits into a single commit, you can use an interactive rebase in Git. Here's a basic approach:

1. Use \`git rebase -i HEAD~N\`, where N is the number of commits you want to squash.
2. In the interactive rebase editor that opens, replace \`pick\` with \`squash\` (or just \`s\`) for the commits you want to squash into the previous one.
3. Save and close the editor.
4. Git will then prompt you to edit the commit message for the new squashed commit.
5. Save the commit message and exit the editor to complete the squash operation.`,
    },
    {
      Q: `What is git bisect? and how do you use it to determine the bug?`,
      A: `Git bisect is used for binary search through commits to find which one introduced a bug. You mark a known good and bad commit, and Git helps navigate between them to identify the faulty commit.`,
    },

    {
      Q: `How to integrate git with Jenkins?`,
      A: `Integration involves configuring Jenkins to pull code from a Git repository, triggering builds on new commits, and possibly running tests or other tasks.`,
    },

    {
      Q: `How do you configure a repository to run code sanity checking tools right before it commits?`,
      A: `You configure this by setting up a pre-commit hook in Git. This script executes code checks (like linting or formatting tools) before allowing a commit.`,
    },

    {
      Q: `What is git cherry-pick?`,
      A: `Git cherry-pick allows you to apply a specific commit from one branch onto another, selectively bringing changes without merging the entire branch.`,
    },

    {
      Q: `What is git reflog?`,
      A: `Git reflog logs all reference updates in a repository, helping to recover lost commits or branches after actions like resets or rebases.`,
    },

    {
      Q: `How to recover a deleted branch using git reflog?`,
      A: `You recover a deleted branch by finding its commit hash in git reflog and checking it out using \`git checkout -b <branch-name> <commit-hash>\`.`,
    },

    {
      Q: `Mention some of the git reflog sub commands.`,
      A: `Some useful git reflog sub-commands include \`git reflog show\`, which displays the commit history, and \`git reflog expire\` and \`git reflog delete\` for managing and deleting reflog entries.`,
    },
    {
      Q: ``,
      A: ``,
    },
  ];

  return <QAReturn QA={QA} />;
};
