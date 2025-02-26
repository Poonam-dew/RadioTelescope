import React from 'react';
import TeamMember from './TeamMember';
import '../Styles/TeamPage.css';
import StarryBackground from '../Pages/StarryBackground.js';
import { SocialIcon } from 'react-social-icons';


const TeamPage = () => {
    const professor = {
        title: 'Professors',
        members: [
      { name: 'Prof. Bhal Chandra Joshi',
        role: 'Project Supervisor',
        
        profile: 'https://iitr.ac.in/Departments/Physics%20Department/People/Faculty/800021.html '},

      { name: 'Prof. P. Arumugam',
        role: 'Department of Physics',
        image: require('../Assets/Arumugam.jpg'),
        profile: 'https://www.iitr.ac.in/~PH/aruphfph '},

      { name: 'Prof. Karun Rawat',
        role: 'Department of Electronics and Communication Engineering',
        image: require('../Assets/Karun.jpg'),
        profile: 'https://ece.iitr.ac.in/karun-rawat/ '},

      { name: 'Prof. Meenakshi Rawat',
        role: 'Department of Electronics and Communication Engineering',
        image: require('../Assets/Meenakshi.png'),
        profile: 'https://ece.iitr.ac.in/meenakshi-rawat/'},

      { name: 'Prof. Amlendu Patnaik ',
        role: 'Department of Electronics and Communication Engineering',
        image: require('../Assets/Amalendu.jpg'),
        profile: 'https://ece.iitr.ac.in/amalendu-patnaik/  '},

      { name: 'Prof. Anil Kumar Gourishetty',
        role: 'Department of Physics',
        image: require('../Assets/AnilSir.jpg'),
        profile: 'https://iitr.ac.in/Departments/Physics%20Department/People/Faculty/100557.html '},

      { name: 'Prof. Sanjay Upadhyay ',
        role: 'Department of Mechanical and Industrial Engineering',
        image: require('../Assets/Sanjay.jpg'),
        profile: 'https://www.iitr.ac.in/smsl/index.html '},
      ]
    };

    const teams = [
        {
            title: 'Student Team',
            members: [
                { name: 'Geetika Racherla', role: 'Founding member',image: require('../Assets/Geetika.jpg'), profile: 'https://www.linkedin.com/in/geetikaracherla?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIfVddK5BSFiqt12C5Pg7vw%3D%3D ' },
                { name: 'Susmit Walve', role: 'Founding member',image: require('../Assets/Susmit.jpg'), profile: 'https://www.linkedin.com/in/susmit-walve-410323192?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQ52HDOl2Q0mHTA1c8QR4gA%3D%3D ' },
                { name: 'Janhavi Tarale', role: 'Founding member',image: require('../Assets/Janhavi.jpg'), profile: 'https://www.linkedin.com/in/janhavi-tarale-703502194?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFsGS6Jo%2FRr%2BJuQO5z4YJgA%3D%3D' },
                { name: 'Piyush Marmat', role: 'Founding member', image: require('../Assets/Piyush.jpg'),profile: 'https://www.linkedin.com/in/piyush-marmat-0ba913240?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqfZ7lszXTtijhbYx3qA2Iw%3D%3D ' },
                { name: 'Saket Priyam', role: 'Founding member', profile: 'bob@university.edu' },
                { name: 'Vanshaj', role: 'Founding member', profile: 'bob@university.edu' },
                { name: 'Manav Dharewa', role: 'Founding Member', image: require('../Assets/Manav.jpg'),profile: 'https://www.linkedin.com/in/manav-dharewa?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDx4VI2MGTrSBWjNHvJylDg%3D%3D ' },
                { name: 'Ratul Thakur', role: 'Founding Member',image: require('../Assets/Ratul.jpg'), profile: 'https://www.linkedin.com/in/ratul-thakur?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVRVruXUfSRa70LD%2BMx68gw%3D%3D' },
                { name: 'Manthan', role: 'Founding member', profile: 'bob@university.edu' },
                { name: 'Tushar', role: 'Founding member', profile: 'bob@university.edu' },
                { name: 'Himanshu Grover', role: 'Coordinator',image: require('../Assets/Himanshu.jpg'), profile: 'https://www.linkedin.com/in/-himanshugrover-?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BG7aFCJrPSc%2Bn6KRiWZJtLA%3D%3D' },
                { name: 'Adya Shukla', role: 'Member',image: require('../Assets/adya.jpg') , profile: 'bob@university.edu' },
                { name: 'Krish Shah', role: 'Project Coordinator',image: require('../Assets/Krish.jpg'), profile: 'https://www.linkedin.com/in/k-shah?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BKDRrR%2FaRcWy8TetFtNy6w%3D%3D' },
                { name: 'Kaustav Bhattacharjee', role: 'Mechanical Lead',image: require('../Assets/Kaustav.jpg'), profile: 'https://www.linkedin.com/in/kaustav-b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Birs6DhwyTQum5OHoiSnTAg%3D%3D' },
                { name: 'Arutkeerthi', role: 'Member', profile: 'bob@university.edu' },
                { name: 'Bhawna Mangal', role: 'Member',image: require('../Assets/Bhawna.jpg'), profile: 'https://www.linkedin.com/in/bhawna-mangal-a34010271?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkIEFixKhSXGapju05dZHmg%3D%3D ' },
                { name: 'Jinti Barman', role: 'Member', profile: 'bob@university.edu' },
                { name: 'Ayush Ashray Nishad', role: 'Member', profile: 'bob@university.edu' },
                { name: 'Shivam Singh Aswal', role: 'Member', profile: 'bob@university.edu' },
                { name: 'Shiva Sai', role: 'Member', profile: 'https://www.linkedin.com/in/jajapuram-shiva-sai?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYRXgymtzT%2BKCgxMVPQGt7Q%3D%3D' },
                { name: 'Swastika Sanghi', role: 'Member', image: require('../Assets/swastika1.jpg') , profile: 'https://www.linkedin.com/in/swastika-sanghi?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGaZSNKX6TgWZ6SVXLXzqwg%3D%3D' },
                { name: 'Anamika Patel', role: 'Web Dev Team',image: require('../Assets/Anamika2.jpg'), profile: 'http://linkedin.com/in/anamika-patel-aa7030295 ' },
                { name: 'Poonam Dewangan ', role: 'Web Dev Team',image: require('../Assets/Poonam.jpg'), profile: 'https://www.linkedin.com/in/poonam-dewangan-49598a328/' },
                { name: 'Bhoomika Tanikonda', role: 'Member',image: require('../Assets/Bhoomika.jpg'), profile: 'https://www.linkedin.com/in/bhoomika-tanikonda/overlay/contact-info/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BdWIbIicPTsm60D9PNoCp3Q%3D%3D ' },
                { name: 'Priyangsi', role: 'Electrical lead', profile: 'bob@university.edu' },
                { name: 'Jaikhomba Singha', role: 'Member', image: require('../Assets/Jaikhomba.jpg'),profile: 'https://www.linkedin.com/in/jaikhomba-singha-42a199118?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Btj3CX40ESyeW2pxwO63xZw%3D%3D ' },
                { name: 'Swapnil Shinde', role: 'Member', profile: 'bob@university.edu' },
                { name: 'Aryan Singh Chaudhary ', role: 'Member', image: require('../Assets/Aryan.jpeg'), profile: 'bob@university.edu'},
                { name: 'Priyank Patel', role: 'Member', profile: 'bob@university.edu' },
                { name: 'Dikshant', role: 'Member', profile: 'bob@university.edu' },
                { name: 'Anaisha', role: 'Member', profile: 'bob@university.edu' },
                { name: 'Ramya', role: 'Member', profile: 'bob@university.edu' },
                { name: 'Yash Sharma', role: 'Mechanical lead', profile: 'bob@university.edu' },
                { name: 'Shashank', role: 'Mechanical design', profile: 'bob@university.edu' },
            ],
        },
        
    ];

    return (
        <div className="team-page">
             <StarryBackground/>
            <h2 className="team-page-title">Project Team</h2>
            
            {/* Professor Section */}
            {/* <div className="team-section">
                <h3 className="team-title">Professor</h3>
                <TeamMember name={professor.name} role={professor.role} email={professor.Profile} />
            </div> */}



            
                <div className="team-section" >
                    <h3 className="team-title">{professor.title}</h3>
                    <div className="team-members">
                        {professor.members.map((member, idx) => (
                            <TeamMember key={idx} name={member.name} role={member.role} profile={member.profile} image={member.image} />
                        ))}
                    </div>
                </div>
            



            {/* Student Teams */}
            {teams.map((team, index) => (
                <div className="team-section" key={index}>
                    <h3 className="team-title">{team.title}</h3>
                    <div className="team-members">
                        {team.members.map((member, idx) => (
                            <TeamMember key={idx} name={member.name} role={member.role} profile={member.profile} image={member.image}/>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamPage;

