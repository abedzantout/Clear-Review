// app/routes.js
/**
 *
 *
 * expose this function to our app using module.exports
 * @param app for subapplication creation
 * @param passport for authentication
 * @return authentication router and middleware for the main application
 */
module.exports = function (app, passport) {

    /**
     * @param request and response
     * @return welcome screen rendering
     */
    app.get('/', function (req, res) {
        // load the index.ejs file
        res.render('index.ejs');
    });

    /**
     * shows the login form
     *
     */
    app.route('/login')
        .get(function (req, res) {

            // render the page and pass in any flash data if it exists
            res.render('auth/login.ejs', {message: req.flash('loginMessage')});
        })

        // process the login form
        .post(passport.authenticate('local-login', {
                successRedirect: '/home', // redirect to the secure profile section
                failureRedirect: '/', // redirect back to the signup page if there is an error
                failureFlash: true // allow flash messages
            }),
            /**
             *
             * @param req
             * @param res
             * @return home page with session that does not expire
             */
            function (req, res) {
                console.log("hello");


                if (req.body.remember) {
                    req.session.cookie.maxAge = 1000 * 60 * 3;
                } else {
                    req.session.cookie.expires = false;
                }
                res.redirect('/');
            });

    /**
     * shows the sign up form
     * @param req async function
     * @param res async function
     * @return signup form on get request
     */
    app.get('/signup', function (req, res) {
        //TODO: to fix
        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', {
            message: req.flash('signupMessage')
        });
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    /**
     * Profile Section
     * we will want this protected so you have to be logged in to visit
     * we will use route middleware to verify this (the isLoggedIn function)
     *
     * @param req async function
     * @param res async function
     * @return page rendered on get request
     */
    app.get('/home', isLoggedIn, function (req, res) {
        res.render('home.ejs', {
            user: req.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
};

/**
 *
 * @param req as request
 * @param res as response
 * @param next callback function
 * @returns next() on successful authentication check and renders page
 */
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
}


// app/routes.js
module.exports = function (app, passport) {
    /**
     * home page with links
     * @param req
     */
    app.get('/', function (req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });

    /**
     * login form
     * @param: request in async function
     * @param: response in async function
     * @returns login form with success message
     */
    app.route('/login')
        .get(function (req, res) {

            // render the page and pass in any flash data if it exists
            res.render('login.ejs', {
                message: req.flash('loginMessage')
            });
        })

        /**
         * process the login form
         */
        .post(passport.authenticate('local-login', {
                successRedirect: '/home', // redirect to the secure profile section
                failureRedirect: '/', // redirect back to the signup page if there is an error
                failureFlash: true // allow flash messages
            }),
            /**
             *
             * @param req in async function
             * @param res in async function
             * @return redirect to home page with session
             *
             */
            function (req, res) {
                console.log("hello");
                if (req.body.remember) {
                    req.session.cookie.maxAge = 1000 * 60 * 3;
                } else {
                    req.session.cookie.expires = false;
                }
                res.redirect('/');
            });

    /**
     * shows sign up function with message
     * @param req in async function
     * @param res in async function
     * @return signup form with message
     */
    app.get('/signup', function (req, res) {
        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', {message: req.flash('signupMessage')});
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/home', // redirect to the secure home section
        failureRedirect: '/', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    /**
     * home section
     * we will want this protected so you have to be logged in to visit
     * we will use route middleware to verify this (the isLoggedIn function)
     * @param request
     * @param response
     * @callabck: isLogged in
     * @return session with user
     */
    app.get('/home', isLoggedIn, function (req, res) {
        res.render('home.ejs', {
            title: 'Clear Review',
            user: req.user // get the user out of session and pass to template
        });
    });

    /**
     * logout functionality
     * @param req into async function
     * @param res into async function
     *
     */
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
};

/**
 *
 * @param request
 * @param response
 * @param next callback functinon
 * @returns page redirect on authentication
 */
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
}