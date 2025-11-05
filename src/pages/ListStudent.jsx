import { useState } from 'react'
import { Trash2, Edit3, Eye } from "lucide-react"

const ListStudent = () => {
    const [students, setStudents] = useState([
        { _id: '1', rollNo: '101', name: 'Alice Johnson', email: 'alice@example.com', roomNo: 'A1' },
        { _id: '2', rollNo: '102', name: 'Bob Smith', email: 'bob@example.com', roomNo: 'B2' },
        { _id: '3', rollNo: '103', name: 'Carol Lee', email: 'carol@example.com', roomNo: 'C3' },
    ])

    const handleDelete = (id) => {
        setStudents((prev) => prev.filter((s) => s._id !== id))
    }

    const handleEdit = (id) => {
        alert("Edit student: " + id)
    }

    const handleView = (id) => {
        alert("View student: " + id)
    }

    return (
        <div className="container mx-auto px-4 mt-8">
            <div className="flex flex-col">
                <h2 className="text-2xl font-bold mb-6 text-cyan-800">Student List</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto">
                        <thead className="bg-cyan-600/20 text-cyan-900">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Roll No</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Room No</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {students.map((student) => (
                                <tr key={student._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{student.rollNo}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{student.roomNo}</td>
                                    <td className="px-6 py-4 whitespace-nowrap flex gap-3">
                                        <button onClick={() => handleView(student._id)} className="text-cyan-600 hover:text-cyan-800">
                                            <Eye size={18}/>
                                        </button>

                                        <button onClick={() => handleEdit(student._id)} className="text-cyan-600 hover:text-cyan-800">
                                            <Edit3 size={18}/>
                                        </button>

                                        <button onClick={() => handleDelete(student._id)} className="text-red-600 hover:text-red-800">
                                            <Trash2 size={18}/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListStudent
