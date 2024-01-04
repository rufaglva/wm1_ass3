import React from "react";
import { Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import ContactPage from './contactme';


const { Title, Paragraph } = Typography;

const index = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center">
      <div className=" bg-white p-8 rounded-md shadow-md">
        <div className="text-center">
          <Title level={2} className="text-3xl font-bold mb-4">
            Hi, I'm Rufa Guliyeva
          </Title>
          <Paragraph className="text-gray-600">
            I'm a 19-year-old junior student at ADA University, majoring in
            Bachelor of Science in Information Technologies.
          </Paragraph>
        </div>

        <div className="mt-8">
          <Title level={3} className="text-2xl font-bold mb-4">
            Java Bookstore Management Application
          </Title>
          <Paragraph className="text-gray-700">
            "Application for Managing a Bookstore" is a Java console-based
            application designed for comprehensive bookstore management. It
            allows users to perform various tasks related to books, authors,
            customers, and orders. The application seamlessly interacts with a
            PostgreSQL database for efficient storage and retrieval.
          </Paragraph>
          <Paragraph className="text-gray-700">
            Explore the code on GitHub:
            <a
              href="https://github.com/rufaglva/flashcardwm1.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="default" className="ml-2" shape="round">
                GitHub Repository
              </Button>
            </a>
          </Paragraph>
        </div>
        <Link to="/contact">
          <Button type="default" className="ml-2" shape="round">
            Contact Me
          </Button>
        </Link>
        <button
          onClick={() => navigate("/flashcards")}
          className="bg-[green] text-white rounded-md py-1 px-5"
        >
          Cards
        </button>
      </div>
    </div>
  );
};

export default index;
