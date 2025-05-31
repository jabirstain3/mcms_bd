import CommentCard from "../commentCard/CommentCard";


const Customerreview = () => {
    const testimonials = [
        {
            name: "Ayesha Khan",
            camp: "Health Awareness Camp - Lahore",
            image: "https://randomuser.me/api/portraits/women/45.jpg",
            rating: 5,
            title: "Life-changing Experience!",
            comment: "The medical camp was well-organized and the doctors were very helpful. I learned a lot about managing my health and received a free checkup. Highly recommended!"
        },
        {
            name: "Rizwan Ahmed",
            camp: "Free Eye Checkup Camp - Karachi",
            image: "https://randomuser.me/api/portraits/men/54.jpg",
            rating: 4,
            title: "Excellent Service",
            comment: "I got my eyes tested for the first time and the staff was very professional. The camp provided free glasses to those in need. Thank you for this wonderful initiative!"
        },
    ];

    return (
        <div className="sectionBase mx-auto my-10 md:my-16">
            <h1 className="text-[2.5rem] font-bold text-center">Customer Review</h1>

            <div className=" flex flex-col items-center lg:items-start  justify-center md:flex-row gap-6 mt-6 md:mt-10">
                {testimonials.map((testimonial, index) => (
                    <CommentCard key={index}  comment={testimonial}/>
                ))}
            </div>
        </div>
    );
};

export default Customerreview;