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
      text: "24 Hour Business Game is an event where students enter with a start-up idea and walk out of with a well thought-out and constructed business plan. During the challenge, the young entrepreneurs, guided by IT, Marketing and Financial advisors, form teams and conceptualize their startup proposals for the final pitch while enjoying numerous energizing activities and delicious food provided by our partners. All in 24 hours! The winners of the challenge get a cash prize along with an opportunity to participate in the 12-week entrepreneurial programme Get Started.",
      link: "events/24hbg"
    },
    {
      topimage: "pages/events%20overview/sem-eov",
      title: "Social Entrepreneurship Masterclass",
      text: "The Social Entrepreneurship Masterclass (SEM) consists of 4 workshops spread across 3 weeks, designed to coach students about starting their own sustainable enterprise. During the challenge, student teams take part in these workshops, arranged by experienced entrepreneurs, and develop a business plan that tackles a social or an environmental issue. In the end, participants pitch their ideas to the jury, which includes potential investors of the students’ startups. The initiators of the best idea win a cash prize as well as an entrance to  ECE’s 12-week programme Get Started!",
      link: false
    },
    {
      topimage: "pages/events%20overview/il-eov",
      title: "IdeaLab",
      text: "IdeaLab is a one-day challenge where we provide participants with a chance to fine-tune their ideas and crack startup cases. During the event, groups of students, with shared passion towards entrepreneurship, experience the dynamics of working for a young venture, by solving real-life business complications encountered by our partner startups. After having brainstormed potential solutions to the problems, the participants pitch their objectives to the judges. Initiators of the best idea win a prize while their idea gets implemented by the startups in favour of eliminating the problems considered in the challenge.",
      link: false
    },
    {
      topimage: "pages/events%20overview/ic-eov",
      title: "Innovation Challenge",
      text: "In the Innovation Challenge, participants, guided by experienced mentors, investigate a real-life case, experienced by our partner businesses, form teams, brainstorm solutions and pitch their ideas to the judges. It is a two-way opportunity for creative-minded students and business organizations. While the companies benefit from ideas of the young students, the participants are able to liberate their imagination and to solve business-related problems to compete over the final award for the best problem-solving idea.",
      link: false
    },
    {
      topimage: "pages/events%20overview/sumt-eov",
      title: "Summit Trip",
      text: "START Summit is the biggest annual student-run conference for entrepreneurship and technology in Europe, taking place in St. Gallen, Switzerland. For only €169, which includes the return flight tickets, accommodation in St. Gallen, START Summit tickets and meals, we provide our future entrepreneurs with once-in-a-while opportunity to participate in the two-day conference, full of unique speakers, workshops and networking events, where the students are able to meet with visionary founders, high-profile investors and other ambitious young entrepreneurs!",
      link: false
    },
    {
      topimage: "pages/events%20overview/st-eov",
      title: "Study Trip",
      text: "In the Study Trip, we give our future entrepreneurs an opportunity to enrich their networks by participating in the ten-day voyage to another country. Apart from exploring new culture and economy, the participants meet with representatives of several headquarters of local organizations and seize a chance to establish close connections with their future customers, investors, partners and other potential stakeholders. The exact destination of the trip is different every year and is kept in secret prior to the actual event.",
      link: false
    },
    {
      topimage: "pages/events%20overview/ctc-eov",
      title: "CleanTech Challenge",
      text: "CleanTech Challenge is a Master course elective, where we bring together students with an aspiration towards sustainability. During the challenge, the participants shape their own sterile technology business ideas, in favor of solving some of the most pressing environmental issues. CleanTech includes a set of events and workshops during which the students, supported by executives from business as well as engineering industries, will brainstorm potential solutions to improving environmental conditions and propose their final ideas to the judges to compete over the award at the finals!",
      link: false
    }
  ]
}
