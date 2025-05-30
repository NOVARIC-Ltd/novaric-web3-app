import { Link } from "@remix-run/react";

export default function Courses() {
    const courseList = [
        { id: 1, name: "Blockchain for HR", price: "99", currency: "EUR" },
        { id: 2, name: "Web3 Recruitment Strategies", price: "149", currency: "EUR" }
    ];

    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Available Courses</h2>
            <ul className="space-y-4">
                {courseList.map(course => (
                    <li key={course.id} className="border p-4 rounded">
                        <h3 className="font-bold">{course.name}</h3>
                        <p>Price: {course.price} {course.currency}</p>
                        <Link to={`/checkout/${course.id}`} className="text-blue-500">Buy Now</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
