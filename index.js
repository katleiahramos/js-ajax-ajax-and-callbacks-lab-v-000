$(document).ready(function (){

});

function displayError() {
  $('#errors').html("There was an error. Please try again.")
}

function searchRepositories() {
  // queries the GitHub repository search API
  const searchTerms = $('#searchTerms').val()

  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, results => displayResults(results))
}

function displayResults(results) {
  // result is an array of JSON

  const renderedResults = results.items.map(result => displayResult(result))
  $('#results').html(renderedResults)
}

function displayResult(result) {
  // return html with string interpolated attrs

  return (
  `<div id="result">
     <h3>name: ${result.full_name}</h3>
     <p>url: ${result.html_url}</p>
     <p>owner: ${result.owner.login}</p>
     <p><a href="#" data-url="${result.url}" onclick="showCommits(this);return false;">See Commits</a></p>
  </div>`)
}

function showCommits(el) {

  $.get(`${el.dataset.url}/commits`, commits => renderCommits(commits))
}

function renderCommits(commits) {

  const renderedCommits = commits.map(commit => renderCommit(commit))

}

function renderCommit(commit) {
  debugger
  return(
    // `<li>${commit.sha} - ${commit.author.login} - <img src="${commit.author.avatar_url}" width="100px" height="100px"></li>`
      `<li>${commit.sha} - <img src="${commit.author.avatar_url}" width="100px" height="100px"></li>`
  )
}
