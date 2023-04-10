import React from 'react';
import  './Profile.css';
import {Link} from 'react-router-dom';
function Profile() {
  return (
    <React.Fragment>
    <Link to='/calculator'>
            <button className='button'>Calculator</button>
    </Link>
    <Link to='/rickmorty'>
            <button className='button1'>Rick Morty</button>
    </Link>
    <div className='center'>
    <img src="https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Akshith.jpg" id="photo" width="150" height="200"/> 
    <p id="name"><center>AKSHITH JOBIRIN S</center></p>

    <p class="contact-details">
    <i class='fa fa-linkedin'></i>
    <a href="https://www.linkedin.com/in/akshith-jobirin-s-365503201/" id="linkdein">LINKEDIN</a>&nbsp; --- &nbsp; 
    <i class='fa fa-github'></i>
    <a href = "https://github.com/akshith-07" id="github">GITHUB</a>&nbsp; --- &nbsp;  
    <i class='fa fa-envelope'></i>
    <a href = "mailto:akshith2002jobirin@gmail.com" id="mail">CONTACT  MAIL</a>&nbsp; --- &nbsp; 
    <i class='fa fa-mobile'></i>
    PHONE : 7530034495 

    </p>

    <div id="font">
    <p id="objective">0BJECTIVE:</p>
    <p>To have a growth-oriented and challenging career where I can contribute my software knowledge and skills to the
        organization which will further enhance my experience and enrich my knowledge through continuous learning and team
        work, which will in turn provide satisfaction and self-development.</p>



    <p id="education">EDUCATION:
        <table>
            <tr>
                <th>Level of Education</th>
                <th>Institution</th>
                
                <th>Year of Completion</th>
                <th>CGPA</th>
            </tr>
            <tr>
                <td>B.E - Computer Science and Engineering</td>
                <td>Saveetha Engineering College</td>
                
                <td>2020-Present</td>
                <td>9.46 (upto 4th semester)</td>
            </tr>
            <tr>
                <td>12th Standard</td>
                <td>Amala Matriculation Higher Secondary School</td>
                
                <td>2020</td>
                <td>79.2%</td>
            </tr>
            <tr>
                <td>10th Standard</td>
                <td>Amala Matriculation Higher Secondary School</td>

                <td>2018</td>
                <td>96%</td>
            </tr>
        </table><br/>

    </p>       
    </div>

    <div id="others"/>
        <p id="skills"/>SKILLS:

        <ul/>
            <li>LANGUAGES : C , C++ , javascript</li><br/>
            <li>FRAMEWORKS : Scikit , Streamlit , React Js</li><br/>
            <li>TOOLS: VISUAL STUDIO , Github</li><br/>
            <li>PLATFORMS : Google cloud</li><br/>
            <li>SOFT SKILLS : Team Player , Writing , Creativity</li>

        <ul/>

        <p/>
        
        <p id="projects">ACADEMICS PROJECTS</p>

        <ul/>
            <li/><b>MINE VS ROCK PREDICTION USING MACHINE LEARNING: </b>
                <br/><br/>
                A Machine Learning based project forpredicting whether the object in the underwater is mine or rock with the help of SONAR technology. SONAR uses sound
                waves to detect objects underwater . In this project , machine learning algorithms like logistic regression , KNN-neighbours is
                used to predict whether the object that is detected in the SONAR is mine or rock. A Web Application is also implemented by
                using the Streamlit Framework. <li/><br/>
            <li/><b>MULTIPLE DISEASE PREDICTION USING MACHINE LEARNING:</b>
                <br/><br/>
                A Machine Learning based project for detecting whether the person is affected by Heart Disease or Diabetes or Parkinsons disease by the help of the parameters like
                age, sex, bmi, insulin, glucose, blood pressure, diabetes pedigree function, pregnancies , etc.A web application is also
                implemented by using the Streamlit Framework.<li/><br/>

        <ul/>

        <p/>
        
        <p id="extracurriculars"/>EXTRA CURRICULARS

        <ul/>
            <li>Member of Coder's Club</li><br/>
            <li>Member of Math Club</li><br/>
            <li>Volunteer of National Service Scheme</li><br/>
            <li>Participated in MSME Hackathon on the topic - "MINE VS ROCK PREDICTION"</li><br/>

        <ul/>

        <p/>
        
        <p id="certificates">CERTIFICATION COURSES:
            <table>
                <tr>
                    <th>SUBJECT</th>
                    <th>PLATFORM</th>
                    <th>PLACE</th>
                    <th>COURSE PERIOD</th>
                
                </tr>
                <tr>
                    <td>Social Networks</td>
                    <td>NPTEL </td>
                    <td>IIT Madras , Chennai</td>
                    <td>July 2022 - October 2022</td>
                    
                </tr>
                <tr>
                    <td>Data Science And Analytics</td>
                    <td>PANTECH</td>
                    <td>Pantech , Chennai</td>
                    <td>January 2022 - February 2022</td>
                
                </tr>
                
            </table><br/>
        </p> 
    

        <p id="personalinfo"/>PERSONAL INFORMATION

        <ul/>
            <li>Date of Birth : 24-08-2002</li><br/>
            <li>Address :  3-117A,Thaipilavilai,Nelliyarakonam,Neyyoor(P.O),KanyaKumari District</li><br/>
            <li>Phone number : 7530034495</li><br/>
            <li>Nationality : Indian</li><br/>

        <ul/>

        <p/>


        
        <div/>
        <div/>
        </div>
    </React.Fragment> 
  )
}

export default Profile