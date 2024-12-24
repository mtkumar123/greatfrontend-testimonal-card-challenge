import React from "react";
import TestimonalCard from "./components/testimonalCard";

const App: React.FC = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className="pt-[200px]">
        <TestimonalCard
          image="../img/profile-thumbnail.png"
          name="Sarah Dole"
          username="@sarahdole"
          message="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
        ></TestimonalCard>
      </div>
    </div>
  );
};

export default App;
