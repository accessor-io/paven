const Team = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Our Leadership Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TeamMember
            name="Dr. Pamela Payne"
            role="Executive Director"
            image="/team/pamela-payne.jpg"
            bio="Leading PAVEN's mission with over 20 years of community service experience."
          />
          {/* Add more team members */}
        </div>
      </div>
    </section>
  );
}; 