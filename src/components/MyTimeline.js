import * as React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

const timeline = [
  { date: "Febrary 1996", event: "Born in Fairfax Hospital, VA" },
  {
    date: "August 2002",
    event:
      "Moved from Dumfries VA to Fairfax VA. Attended <b>Mosbey Woods Elementary</b> for 1st-2nd grade",
    color: "warning",
  },
  {
    date: "August 2004",
    event:
      "Moved from Fairfax VA to Falls Church VA. Attended <b>Timberlane Elementary</b> from 3rd-4th grade",
    color: "warning",
  },
  {
    date: "August 2007",
    event:
      "Moved from Falls Church VA to Burke VA. Attended <b>Fair View Elementary</b> from 5th-6th grade",
    color: "warning",
  },
  {
    date: "September 2008",
    event: "Started school at <b>Robinson Secondary School</b>",
  },
  {
    date: "May 2014",
    event: "Graduated from <b>Robinson Secondary School</b>",
  },
  {
    date: "August 2014",
    event: "Enrolled into <b>Northern Virginia Community College</b>",
  },
  {
    date: "September 2014",
    event:
      "Joined <b>Vienna Drug Center</b> as a <i>Pharmacy Clerk</i> as myfirst job",
  },
  {
    date: "August 2015",
    event: "Left <b>Vienna Drug Center</b>",
    color: "error",
  },
  {
    date: "August 2015",
    event: "Joined <b>MobileSentrix</b> as a <i>Shipping Coordinator</i>",
  },
  {
    date: "August 2018",
    event:
      "Changed roles at <b>MobileSentrix</b> as a<i> Quality Control Specialist</i>",
    color: "warning",
  },
  {
    date: "May 2021",
    event: `Recevied my <b><i>Associates of Science</i></b> in Computer Science from <b>Northern Virginia Community College</b>`,
  },
  {
    date: "August 2021",
    event:
      "Enrolled into <b>George Mason Univeristy</b><i> studying Computer Science</i>",
  },
  {
    date: "August 2023",
    event: "Changed roles at <b>MobileSentrix</b> as a <i>Buisness Analyst</i>",
    color: "warning",
  },
  {
    date: "January 2024",
    event: "Left <b>MobileSentrix</b>",
    color: "error",
  },
  {
    date: "May 2024",
    event:
      "Graduated from <b>George Mason University</b> and received my <b><i>Bacholors of Science</i></b> in Computer Science",
  },
  {
    date: "Present",
    event:
      "Devevloping a React application <i>Sports-lookup</i>, seeking job opportunies, and committed to continous learning",
    color: "secondary",
  },
];

export default function MyTimeline() {
  return (
    <Timeline>
      {timeline.map((events) => (
        <TimelineItem>
          <TimelineOppositeContent variant="h5" sx={{ color: "primary.main" }}>
            {events.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color={events.color ? events.color : "success"} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            variant="body1"
            sx={{ color: "primary.secondary" }}
            dangerouslySetInnerHTML={{ __html: events.event }}
          >
            {/* {events.event} */}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
