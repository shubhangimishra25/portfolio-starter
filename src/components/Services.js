import React from "react";
// icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
const renderDescription = (description) => {
  const lines = description.split('\n');
  return lines.map((line, index) => 

  <p className="font-secondary leading-tight" key={index}>{line}
</p>
  );
};
// services data
const services = [
  {
    name: "Tata Consultancy Services",
    position: "Software Engineer",
    description:
`
 Diligenta (UK):
-Ensure efficient call routing with a response time of less than 30 seconds and target a 90% customer satisfaction rate.
- Continuously optimize system performance for scalability, aiming for a 20% increase in call handling capacity within the next quarter.
- Implement real-time call notifications and consultation features to enable agents to collaborate seamlessly, reducing call transfer times by at least 20%.
- Maintain a rapid response rate to reported technical issues, with a goal of resolving 95% of reported problems within 24 hours to minimize disruption to operations.\n\n\n\n\n\n\n\n 
AIA (Philippines):
-Developed advanced AEM templates, components,and workflowsusing REST, Java, Sling, AEM,and Angular to streamline content management processes,leading toa 30% reduction in content creation time.
-Utilized version control with GIT for efficient project management including automated builds and collaboration with JIRAand Confluence. Enhanced AEM personalization by implementing JavaScript solutions resulting ina 20% reduction in call transfer times.
TCS Business 4.0 (United States):`,
link: "Learn more",
    date: "2018 Oct - 2021 Aug",
    location: "India",
  },
  {
    name: "Teletracking Technologies Inc",
    position: "Software Enginner Intern",

    description:
    `-Contributed tom igrating a .NETWCF microservicefrom AzuretoAWS,reducing hosting costs by3 0%. Docker, Kubernetes,and Terraform were used for infrastructure setup.
    -Deployed multiple .NET applications on AWS ECS (Fargate and EC2), reducing deployment time by25%. 
    -Documented deployment steps and pros & cons.
    -Built a CircleCI pipeline,making deployments 40% faster. 
    -IntegratedWindows execution orb and configured Spinnaker CD pipelines, reducing deployment errors by 50%.`,
    link: "Learn more",
    date: "2022 May - 2022 Aug",
    location: "Pensylvania,USA",
  },
  // {
  //   name: 'Digital Marketing',
  //   description:
  //     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, quia quo expedita accusamus illum ducimus.',
  //   link: 'Learn more',
  // },
  // {
  //   name: 'Product Branding',
  //   description:
  //     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, quia quo expedita accusamus illum ducimus.',
  //   link: 'Learn more',
  // },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0  "
          >
            <h2 className="h2 text-accent mb-6">What I Have Done.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I've worked as an Engineer
              in the industry and gained some 
              good experience working on projects.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-2"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, position, description, date, location } = service;
                return (
                  <div
                    className="border-b border-white/20  mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[600px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <h5 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {position}
                      </h5>  
                      <div>{renderDescription(service.description)}</div>
   
                     
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      {/* <a
                        href='#'
                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                      >
                        <BsArrowUpRight />
                      </a>

                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a> */}
                      <p className=" font-semibold mb-6">{date}</p>
                      <p className=" font-semibold mb-6">{location}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
