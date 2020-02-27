import { getGithubData } from "../apis/github";
import { getJiraUserAssigneeIssues } from "../apis/jira";
import { getJenkinsData } from "../apis/jenkins";

const baseString = btoa("igalleibovich:7yYAhyuHCVpFVuRupzmV");
console.log("baseString: ", baseString);

getJiraUserAssigneeIssues(response => {
  console.log("JiraData: ", response);
});

getGithubData(response => {
  console.log("GithubData: ", response);
});

getJenkinsData(response => {
  console.log("JenkinsData: ", response);
});





