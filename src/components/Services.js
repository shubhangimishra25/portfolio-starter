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
    name: "Capital One",
    position: "Senior Software Development Engineer",
    description:
`- Architected Java/Spring Boot microservices for credit-card account servicing, processing 600K+ requests daily.
- Reduced median transaction and balance lookup latency from 118 ms to 34 ms through PostgreSQL tuning and Redis caching.
- Engineered Kafka-based event processing handling 95K+ events per hour for transaction monitoring and notifications.
- Contributed to a GenAI-powered RAG workflow across 30K+ knowledge records, saving about 5 hours of investigation per week.`,
    link: "Learn more",
    date: "2024 May - Present",
    location: "New York, USA",
  },
  {
    name: "JP Morgan Chase & Co.",
    position: "Software Engineer",
    description:
`- Built Java/Spring Boot services for payment initiation, transaction validation, and settlement updates.
- Refactored account servicing into 20+ REST APIs and React/TypeScript apps, cutting request processing time from 8 seconds to under 3.
- Hardened onboarding and KYC workflows with Spring Security, OAuth2/JWT, and RBAC, lowering exceptions by 35%.`,
    link: "Learn more",
    date: "2023 Jun - 2024 Apr",
    location: "New York, USA",
  },
  {
    name: "Accenture",
    position: "Software Engineer",
    description:
`- Built Java/Spring Boot microservices and Angular components for retail order management, cart, and checkout.
- Engineered Kafka event pipelines processing 35K+ events per minute across distributed retail services.
- Reduced critical query time from 17 seconds to under 5 seconds through MySQL and PostgreSQL tuning.`,
    link: "Learn more",
    date: "2018 Apr - 2021 Dec",
    location: "India",
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
    <section className="section lg:h-auto lg:min-h-screen" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-12">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0  "
          >
            <h2 className="h2 text-accent mb-6">What I Have Done.</h2>
            <h3 className="h3 max-w-[455px] mb-12">
              6+ years building backend, distributed, and full-stack
              systems in financial services and retail.
            </h3>
            {/* education & certifications */}
            <div className="flex flex-col gap-y-8 mb-16">
              <div>
                <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-2">
                  Education
                </h4>
                <p className="font-secondary leading-tight">
                  Master of Science in Computer Science <br />
                  University at Buffalo, 2023
                </p>
              </div>
              <div>
                <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-2">
                  Certifications
                </h4>
                <p className="font-secondary leading-tight">
                  AWS Certified Solutions Architect - Associate <br />
                  AWS Certified Cloud Practitioner
                </p>
              </div>
            </div>
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
