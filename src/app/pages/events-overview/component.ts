import { Component } from '@angular/core';

@Component({
  selector: 'app-events-overview',
  templateUrl: './template.pug',
  styleUrls: ['./style.scss']
})
export class EventsOverviewComponent {

  events = [
    {
      topimage: "pages/events%20overview/24hbg-eov",
      title: "24 Hour Business Game",
      text: `<p>Are you the one to exceed expectations when facing a time-pressured situation? Are you interested in creative event management?</p>
             <p>As a member of the 24 Hour Business Game committee, these are the skills you need to guarantee the event’s success. The 24 Hour Business Game is organized with the objective to provide the most inspirational startup experience in just 24 hours. Throughout this full-day event, students build a startup with advice from a wide range of professionals regarding innovative product design, growth hacking, lean startup methodology and much more! These tools aim to provide soon-to-be entrepreneurs a chance to build a successful startup, and pitch against the fierce competition.</p>
             <p>Students in this committee will organize the 24HBG by innovating the event, inviting experts, obtaining partnerships and most importantly - aspiring entrepreneurs who will participate in the ‘game’. Students are required to bring their own creativity, and - as a future committee member - you will bring one of ECE Students’ largest signature events to life.</p>`
    },
    {
      topimage: "pages/events%20overview/ic-eov",
      title: "Innovation Challenge",
      text: `<p>Do you want to challenge the status quo? Be an intrapreneur and solve corporate innovation challenges. Then join our Innovation Challenge committee!</p>
             <p>The Innovation Challenge is a series of events with the aim to challenge tough corporate positions by providing students with business cases featuring real-life corporate problems. Furthermore, in the upcoming academic year, ECE Students proudly presents its brand-new event called the Recruitment Challenge, in aim to give a twist to corporate recruitment processes. Teams of students will go through a series of challenges given by corporates, with the opportunity of win an internship.</p>
             <p>Students in the committee will be responsible for the networking with corporates to be participating in the Innovation Challenge and Recruitment Challenge events, on top of providing speakers, workshops, and think of any details that allows students at the events to be motivated and satisfied with the organization.</p>
             <p>Will you be able to disrupt the corporate environment?</p>
      `
    },
    {
      topimage: "pages/events%20overview/il-eov",
      title: "IdeaLab",
      text: `<p>Are you a natural problem-solver with exceptional networking skills? Search no further, we’ve got a perfect position for you in our IdeaLab committee!</p>
             <p>IdeaLabs are interactive sessions that allow students to put their problem solving skills to the test through business cases brought in by a variety of exciting startups. As a committee member, you will be responsible for networking and collaborating with startups on the IdeaLab events, on top of finding speakers that can inspire and motivate young students to come up with solutions to cases that can disrupt the status quo.</p>
             <p>Do you have what it takes to challenge students with the toughest real-life business challenges?</p>
      `
    },
    {
      topimage: "pages/events%20overview/sem-eov",
      title: "Social Entrepreneurship Masterclass",
      text: `<p>Did you always want to make a true impact? Do you thrive when  solving social challenges with entrepreneurs, corporates, and startups?</p>
             <p>The Social Entrepreneurship Masterclass is our accelerator for social innovations. As a member of the team behind SEM.</p>
             <p>This events starts off with a grand Kick-Off, consisting of talks given by inspiring Social Entrepreneurs, social drinks and celebrations. In the following two weeks, two additional workshops take place. The event reaches its climax in a final competition, where participants can establish finer nuances of implementing their ideas with the help of mentors that work for established impact-led ventures. The overall timespan of Social Entrepreneurship Masterclass is 2 to 3 weeks. </p>
             <p>Do you want to organize ECE Students’ most impact-driven event series?</p>
      `
    },
    {
      topimage: "pages/events%20overview/sumt-eov",
      title: "Summit Trip",
      text: `<p>Are you willing to cross borders to meet the future? Have you ever wondered what it’s like to be a technological & entrepreneurial step ahead of everyone? By being a part of the Summit Trip committee, you actually can!</p>
             <p>The Summit Trip committee is responsible for organizing our annual study trip to START Summit - the largest student-led Innovation & Entrepreneurship focused conference in St. Gallen, Switzerland. Not only will you be able to attend the summit itself, but will enhance your event-planning skills by organizing the trip from start to finish for a 50-member, ECE Students’ led student delegation. You will organize flights, accommodation, social activities, and most importantly, in-house days and activities with rising startups.</p>
             <p>Are you ready to take ECE Students out of this dimension?</p>
      `
    },
    {
      topimage: "pages/events overview/Headhunteurs-01",
      title: "HeadhuntEURs",
      text: `<p>Do you have an eye for talent? Have you ever set two of your friends up that turned out to be true love and eternal happiness? Would you want to try out your Cupid skills on students seeking internships or jobs at disruptive companies.</p>
             <p>Then the HeadhuntEURs team, is the perfect match for you! Members of this committee will organize recruitment events, analyse startups and manage the ECE Students Job Portal, where startups’ are looking for new talent. It is your job to match students and find awesome startups  and to take our MVP Job Portal to the next level.</p>
             <p>Do you think you can match like it’s made in Heaven?</p>
      `
    },
    {
      topimage: "pages/events overview/HR-01",
      title: "Human Resources",
      text: `<p>Are you a good motivator and a social intelligence genius? Are you the one to prioritize the needs of others?</p>
             <p>Our Human Resources committee will make sure every member of ECE Students is satisfied with their active members experience. ECE Students’ values their active members strongly and believes in maintaining the association’s close-knit setup is key to sustain its unique, entrepreneurial position. You will organize social events and workshops for our active members’ community to create a strong sense of belonging and personal development across our organization.</p>
             <p>Are you the one to throw the hottest events for our community?</p>
      `
    },
    {
      topimage: "pages/events%20overview/MArketing-01.png",
      title: "Marketing",
      text: `<p>Do you have an eye for creativity and a strong set of communication skills? Or do you prefer to create digital content that spreads your word to further audiences? Are you an aspiring vlogger or professional drone pilot?</p>
             <p>We are looking for creative individuals to help us build strategies to help in growing our followers, engage them, and help convert them into leads, customers, and active fans and promoters of our organization. The marketing committee of ECE students aims to strengthen ECE Students’ brand image throughout Erasmus University Rotterdam and the city of Rotterdam. Whether you’re into photography, videography, creating eye-boggling digital content, or your Instagram feed a little too much, you belong to our biggest, most creative committee!</p>
             <p>Do you have what it takes to make ECE Students go viral?</p>
      `
    },
    {
      topimage: "pages/events overview/Devsquad-01_3",
      title: "DevSquad",
      text: `<p>Is your biggest weakness being too much of a perfectionist? Do you love coffee? Are you a night owl? If so, we are looking for you to join our developer team!</p>
             <p>ECE Students is looking for team players to develop, and improve our websites and to build an interactive platform for our association. And of course geek out on cool side projects.  Together with the Marketing Ninjas, you will be completely in charge of our website and content management tools for the other committees. If you want to learn how to get out of your bedroom and develop in a team, experiment and improve your coding skills, stubbornly argue about frameworks, while being surrounded by tech-, and innovation enthusiasts, look no further.</p>
      `
    },
    {
      topimage: "pages/events%20overview/ctc-eov",
      title: "CleanTech Challenge",
      text: `<p>CleanTech Challenge is a Master course elective, where we bring together students with an aspiration towards sustainability. During the challenge, the participants shape their own sterile technology business ideas, in favor of solving some of the most pressing environmental issues. CleanTech includes a set of events and workshops during which the students, supported by executives from business as well as engineering industries, will brainstorm potential solutions to improving environmental conditions and propose their final ideas to the judges to compete over the award at the finals!</p>
      `
    }

  ]
}



/*
`<p></p>
             <p></p>
             <p></p>
      `
*/
