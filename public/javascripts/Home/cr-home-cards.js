window.onload = function(){
    //SHOW DIALOG FOR CourseProfileDetails
    var dialogCourseProfile = document.getElementById("CourseProfile");
    var CourseProfilebutton = document.getElementsByClassName("CourseCard");
    for(var i = 0; i<CourseProfilebutton.length; i++){
        if (! dialogCourseProfile.showModal) {
            dialogPolyfill.registerDialog(dialogCourseProfile);
        }
        CourseProfilebutton[i].addEventListener('click', function() {
            var CCardName = this.parentElement.parentElement.firstElementChild.firstElementChild;
            var CCardDescription = this.parentElement.parentElement.children[1];
            var CourseName = document.getElementsByClassName("CourseName")[0].innerHTML = CCardName.innerHTML;
            var CourseDescription  = document.getElementsByClassName("CourseTitle")[0].innerHTML = CCardDescription.innerHTML;
            // var CoursesTitle = document.getElementsByClassName("CourseTitle")[0].innerHTML = "The courses below are being taught by" + ProfName.innerHTML;
            dialogCourseProfile.showModal();
        });
        dialogCourseProfile.querySelector('.close').addEventListener('click', function() {
            dialogCourseProfile.close();
        });
    }

    //SHOW DIALOG FOR ProfessorProfiles
    var dialogprofessorProfile = document.getElementById("ProfessorProfile");
    var ProfessorProfilebutton = document.getElementsByClassName("ProfessorCard");
    for(var i = 0; i<ProfessorProfilebutton.length; i++){
        if (! dialogprofessorProfile.showModal) {
            dialogPolyfill.registerDialog(dialogprofessorProfile);
        }
        ProfessorProfilebutton[i].addEventListener('click', function() {
            var ProfName = this.parentElement.parentElement.firstElementChild.firstElementChild;
            var ProfessorTitle = document.getElementsByClassName("ProfessorTitle")[0].innerHTML = ProfName.innerHTML;
            var ProfessorCoursesTitle = document.getElementsByClassName("ProfessorCoursesTitle")[0].innerHTML = "The courses below are being taught by" + ProfName.innerHTML;




            dialogprofessorProfile.showModal();


        });
        dialogprofessorProfile.querySelector('.close').addEventListener('click', function() {
            dialogprofessorProfile.close();
        });
    }





};
