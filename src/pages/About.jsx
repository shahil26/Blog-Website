import React from "react"

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-12 px-6 sm:px-12 md:px-16 lg:px-24 w-full max-w-screen-2xl mx-auto">
      <div className="border-t border-b py-8 mb-10">
        <h1 className="w-full text-6xl sm:text-5xl md:text-6xl lg:text-9xl font-extrabold text-center">
          Kumar Shahil
        </h1>
      </div>

      {/* Centered and slightly smaller male image */}
      <div className="flex justify-center mb-10">
        <img
          src="img.jpg"
          alt="Male portrait"
          className="rounded-lg max-w-[600px] w-full object-cover shadow-lg dark:shadow-none"
        />
      </div>

      {/* About Me Section */}
      <div className="w-full mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
          I am a passionate designer with a love for creating beautiful,
          user-friendly digital experiences. With a strong eye for detail and a
          focus on functionality, I craft designs that are both aesthetically
          pleasing and intuitive to use.Over the years, I have developed
          expertise in various design tools and principles, always striving to
          blend creativity with usability. My goal is to bring ideas to life by
          designing interfaces that not only look great but also provide
          seamless user interactions. I enjoy collaborating with developers and
          stakeholders to ensure the final product exceeds expectations.
        </p>
      </div>

      {/* Skills Section */}
      <div className="w-full mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          Skills
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg">
          <li>
            Skilled in creating clean and attractive user interfaces that
            improve user engagement.
          </li>
          <li>
            Good understanding of user experience principles to design intuitive
            workflows.
          </li>
          <li>
            Experienced with Adobe Photoshop and Illustrator for crafting
            quality graphics.
          </li>
          <li>
            Proficient in Figma and Sketch for fast prototyping and design
            collaboration.
          </li>
          <li>
            Knowledgeable in responsive web design to ensure apps work well on
            all devices.
          </li>
          <li>
            Familiar with HTML, CSS, and Tailwind CSS to build consistent
            frontend designs.
          </li>
          <li>
            Able to create wireframes and prototypes to help teams visualize
            ideas quickly.
          </li>
        </ul>
      </div>

      {/* Experience Section */}
      <div className="w-full mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          Experience
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg">
          <li>
            Frontend Intern at GrapplTech - Developed responsive user interfaces
            using React and Tailwind CSS.
          </li>
          <li>
            Software Developer Intern at Appentus Technologies - Assisted in
            building scalable web applications.
          </li>
          <li>
            CFD Intern at ARK Infosolutions - Integrated frontend solutions with
            backend APIs for simulation tools.
          </li>
        </ul>
      </div>

      {/* Education Section */}
      <div className="w-full mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          Education
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg">
          <li>
            Bachelor of Technology in Computer Science, XYZ University (2020 -
            2024)
          </li>
          <li>
            Completed various certifications in UI/UX Design and Frontend
            Development
          </li>
          <li>Active participant in coding hackathons and design workshops</li>
        </ul>
      </div>
    </section>
  )
}

export default About
