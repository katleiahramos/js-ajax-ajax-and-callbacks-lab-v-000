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

  const renderedResults = results.items.map(result =>displayResult(result))

  // $(#results).html()
}

function displayResult(result) {
  // return html with string interpolated attrs
  return
  `<div id="result">
    name: <h3>${result.full_name}</h3>
    url: <p>${result.html_url}</p>
    owner: <p>${result.owner.login}</p>
  </div>`
}
