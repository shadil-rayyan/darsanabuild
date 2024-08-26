"use client";
import React from 'react';
import { useRouter } from 'next/navigation';  // Import useRouter from next/navigation

// Define the types for the props
interface StatusPageProps {
    name: string;
    applicationId: string;
    selectedForScholarship: string;
    amountProcessed: string;
    inboxMessage: string;
}

const StatusPage: React.FC<StatusPageProps> = ({ name, applicationId, selectedForScholarship, amountProcessed, inboxMessage }) => {
    const router = useRouter();  // Use useRouter instead of useNavigate

    const handleViewProfileClick = () => {
        router.push(`/profile/${applicationId}`);  // Navigate to the profile page
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '1000px', margin: 'auto', marginTop: '40px' }}>
            {/* Status Table */}
            <div style={{ marginBottom: '20px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', border: '1px solid #ccc' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#004b77', color: '#fff' }}>
                            <th style={{ padding: '10px', borderRight: '1px solid #ccc', width: '30%' }}>Current Status</th>
                            <th style={{ padding: '10px', width: '70%' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>Name</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{name}</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>Application id</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{applicationId}</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>Selected for Scholarship</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{selectedForScholarship}</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>Amount processed from Darsana</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{amountProcessed}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Inbox Section */}
            <div style={{ marginBottom: '20px' }}>
                <h3>Inbox</h3>
                <div
                    style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        minHeight: '80px',
                        backgroundColor: '#f9f9f9'
                    }}
                >
                    <p>{inboxMessage}</p>
                </div>
            </div>

            {/* View Profile Button */}
            <div style={{ textAlign: 'center' }}>
                <button
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#004b77',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                    onClick={handleViewProfileClick}
                >
                    View Full Profile
                </button>
            </div>
        </div>
    );
};

export default StatusPage;
