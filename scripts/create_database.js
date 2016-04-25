var mysql = require('mysql');
var dbconfig = require('../config/database');

var connection = mysql.createConnection(dbconfig.connection);

connection.query('CREATE DATABASE ' + dbconfig.database);
connection.query('USE '+ dbconfig.database);

connection.query('drop table if exists `ANSWER`');
connection.query('drop table if exists `ANSWERTYPE`');
'drop table if exists `COURSE`; \
drop table if exists `COURSEINSTANCE`; \
drop table if exists `ENROLL`; \
drop table if exists `FACULTY`; \
drop table if exists `QUESTION`; \
drop table if exists `QUESTIONGROUP`; \
drop table if exists `SEMESTER`; \
drop table if exists `STUDENTS`; \
drop table if exists `TEACHER`; \
\
create table ANSWER \
(\
    QUESTIONID           int not null,\
    CRN                  int not null, \
    STUDENTID            int not null,\
    ANSWERTYPEID         int not null,\
    WHY                  varchar(255),\
    primary key (QUESTIONID, CRN, STUDENTID) \
);\
create table ANSWERTYPE\
(\
    ANSWERTYPEID         int not null auto_increment,\
    TITLE                varchar(20) not null,\
    DISPLAYORDER         int not null,\
    primary key (ANSWERTYPEID)\
);\
create table COURSE \
(\
    COURSEID             int not null auto_increment,\
    FACULTYID            int,\
    TITLE                varchar(100) not null, \
    NUMBER               int not null,\
    CREDIT_NUM           int not null,\
    SUBJECT              varchar(20),\
    unique (TITLE),\
    unique (NUMBER),\
    primary key (COURSEID)\
);\
create table COURSEINSTANCE \
(\
    CRN                  int not null,\
    SEMESTERID           int,\
    COURSEID             int,\
    TEACHERID            int,\
    SECTION              int not null, \
    primary key (CRN)\
); \
create table ENROLL \
( \
    CRN                  int not null, \
    STUDENTID            int not null,\
    primary key (CRN, STUDENTID)\
);\
create table FACULTY \
(\
    FACULTYID            int not null auto_increment,\
    NAME                 varchar(50) not null,\
    unique (NAME),\
    primary key (FACULTYID)\
);\
create table QUESTION \
(\
    QUESTIONID           int not null auto_increment,\
    QUESTIONGROUPID      int not null,\
    QUESTION             longtext not null,\
    primary key (QUESTIONID)\
);\
create table QUESTIONGROUP\
(\
    QUESTIONGROUPID      int not null auto_increment, \
    TITLE                varchar(50) not null,\
    primary key (QUESTIONGROUPID)\
);\
create table SEMESTER\
(\
    SEMESTERID           int not null auto_increment,\
    TITLE                varchar(50) not null,\
    primary key (SEMESTERID)\
);\
create table STUDENTS \
(\
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,\
    `email` varchar(20) NOT NULL,\
    `password` char(60) NOT NULL,\
    PRIMARY KEY (`id`),\
    UNIQUE INDEX `id_UNIQUE` (`id` ASC),\
UNIQUE INDEX `email_UNIQUE` (`email` ASC)\
);\
create table TEACHER \
(\
    TEACHERID            int not null auto_increment,\
    FACULTYID            int,\
    FIRST_NAME           varchar(20) not null,\
    SURNAME              varchar(20) not null,\
    unique (FIRST_NAME),\
    unique (SURNAME),\
    primary key (TEACHERID)\
);\
alter table ANSWER add constraint FK_REFERENCE_15 foreign key (CRN, STUDENTID)\
references ENROLL (CRN, STUDENTID) on delete restrict on update restrict;\
\
alter table ANSWER add constraint FK_REFERENCE_16 foreign key (ANSWERTYPEID)\
references ANSWERTYPE (ANSWERTYPEID) on delete restrict on update restrict;\
\
alter table ANSWER add constraint FK_REFERENCE_9 foreign key (QUESTIONID)\
references QUESTION (QUESTIONID) on delete restrict on update restrict;\
\
alter table COURSE add constraint FK_REFERENCE_11 foreign key (FACULTYID)\
references FACULTY (FACULTYID) on delete restrict on update restrict;\
\
alter table COURSEINSTANCE add constraint FK_REFERENCE_10 foreign key (TEACHERID)\
references TEACHER (TEACHERID) on delete restrict on update restrict;\
\
alter table COURSEINSTANCE add constraint FK_REFERENCE_7 foreign key (SEMESTERID)\
references SEMESTER (SEMESTERID) on delete restrict on update restrict;\
\
alter table COURSEINSTANCE add constraint FK_REFERENCE_8 foreign key (COURSEID)\
references COURSE (COURSEID) on delete restrict on update restrict;\
\
alter table ENROLL add constraint FK_REFERENCE_13 foreign key (CRN)\
references COURSEINSTANCE (CRN) on delete restrict on update restrict;\
\
alter table ENROLL add constraint FK_REFERENCE_14 foreign key (STUDENTID)\
references STUDENTS (ID) on delete restrict on update restrict;\
\
alter table QUESTION add constraint FK_REFERENCE_17 foreign key (QUESTIONGROUPID)\
references QUESTIONGROUP (QUESTIONGROUPID) on delete restrict on update restrict;\
\
alter table TEACHER add constraint FK_REFERENCE_12 foreign key (FACULTYID)\
references FACULTY (FACULTYID) on delete restrict on update restrict;\
\
\
\
INSERT INTO SEMESTER\
VALUES\
(null,"Spring 2016"); \
\
INSERT INTO FACULTY\
\
(null,"Faculty of Arts and Sciences");\
\
\
INSERT INTO TEACHER\
VALUES\
(null,"1", "Ahmad","Dhaini"),\
    (null,"1","Youssif Raja","Asfour"),\
    (null,"1","Mahmoud","Bdeir"),\
    (null,"1","Wadii","Jureidini"),\
    (null,"1","Mohamad I", "Jaber"),\
    (null,"1","Wassim","El Hajj");\
\
\
\
INSERT INTO COURSE\
VALUES\
(null,"1","Introduct. to Programming","200","3","CMPS"),\
    (null,"1","Introd. to Computing Systems","205","1","CMPS"),\
    (null,"1","Software Engineering","253","3","CMPS"),\
    (null,"1","Numerical Computing","251","3","CMPS"),\
    (null,"1","Computer Architecture","255","3","CMPS"),\
    (null,"1","Theory of Computation","257","3","CMPS"),\
    (null,"1","Operating Systems","272","3","CMPS"),\
    (null,"1","Web Programming & Design","278","3","CMPS"),\
    (null,"1","Computer Networks","284","3","CMPS"),\
    (null,"1","Artificial Intelligence","287","3","CMPS"),\
    (null,"1","Software Graduation Project","299","3","CMPS");\
\
\
\
INSERT INTO COURSEINSTANCE\
VALUES\
("11107","1","1","1","1"),\
    ("11385","1","2","2","1"),\
    ("21129","1","3","3","1"),\
    ("11154","1","4","4","1"),\
    ("11155","1","5","3","1"),\
    ("11161","1","6","4","1"),\
    ("11162","1","7","5","1"),\
    ("11164","1","8","6","1"),\
    ("11166","1","9","1","1"),\
    ("11167","1","1","2","1"),\
    ("11168","1","1","5","1")'
);
console.log('Success: Database Created!');

connection.end();
