$(document).ready(function (){

});

function displayError() {
  $('#errors').html("There was an error. Please try again.")
}

function searchRepositories() {
  // queries the GitHub repository search API
  const searchTerms = $('#searchTerms').val()

  // $.get(`https://api.github.com/search/repositories?q=${searchTerms}`
}
