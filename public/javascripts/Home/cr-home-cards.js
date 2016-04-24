/**
 * Created by Ali on 4/23/2016.
 */
window.onload = function(){







    //SHOW DIALOG FOR CourseProfileDetails
    var dialogCourseProfile = document.getElementById("CourseProfile");
    var CourseProfilebutton = document.getElementsByClassName("CourseCard");
    for(var i = 0; i<CourseProfilebutton.length; i++){
        if (! dialogCourseProfile.showModal) {
            dialogPolyfill.registerDialog(dialogCourseProfile);
        }
        CourseProfilebutton[i].addEventListener('click', function() {
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
            dialogprofessorProfile.showModal();
        });
        dialogprofessorProfile.querySelector('.close').addEventListener('click', function() {
            dialogprofessorProfile.close();
        });
    }



};
