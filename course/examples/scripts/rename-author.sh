git filter-branch --commit-filter '
if [ "$GIT_AUTHOR_NAME" = "treeskar" ]; then
  GIT_AUTHOR_NAME="Johnny";
fi
git commit-tree "$@";
' HEAD --all