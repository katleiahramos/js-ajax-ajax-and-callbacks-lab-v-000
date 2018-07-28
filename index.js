$(document).ready(function (){

});

function displayError() {
  $('#errors').html("There was an error. Please try again.")
}

function searchRepositories() {
  // queries the GitHub repository search API
  const searchTerms = $('#searchTerms').val()
  debugger
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, result => displayResults(result))
}

function displayResults() {
  debugger
}
