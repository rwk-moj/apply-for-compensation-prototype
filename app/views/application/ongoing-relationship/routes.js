module.exports = function (router, content) {
  // START__####################################################################################################
  // File: ongoing-relationship
  // Variable: ongoing-relationship
  router.post('/application/ongoing-relationship', function (req, res) {
    // Get the answer from the query string
    var ongoingRelationship = req.session.data['ongoing-relationship']

    if (ongoingRelationship === 'Yes')  {
      // Redirect to the relevant page
      res.redirect('/application/what-is-relationship')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/name')
    }
  })

  // Pass the question in to the page
  router.get('/application/ongoing-relationship/', function (req, res) {
    res.render('application/ongoing-relationship/index', content)
  })
  // END__######################################################################################################
}