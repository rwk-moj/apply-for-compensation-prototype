module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/concepts/mental-injuries/v1/diagnosed-by', function (req, res) {
  // Get the answer from the query string

    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/mental-injuries/v1/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/mental-injuries/v1/getting-treatment')
})

// Pass the question in to the page
router.get('/concepts/mental-injuries/v1/diagnosed-by/', function (req, res) {
  res.render('concepts/mental-injuries/v1/diagnosed-by/index', content)
})

router.get('/concepts/mental-injuries/v1/diagnosed-by/diagnosed-by-error', function (req, res) {
  res.render('concepts/mental-injuries/v1/diagnosed-by/diagnosed-by-error', content)
})

// END__######################################################################################################
}
