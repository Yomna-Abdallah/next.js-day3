async function getData() {
    const res = await fetch("https://68ff4bbee02b16d1753d535f.mockapi.io/users", {
        next: {
            revalidate: 10,
        },
    });
    return res.json();
}
const IncrementalStaticRegeneration = async () => {
    const users = await getData();

    return (
        <div className="grid grid-cols-4">
            {users.map((user => (
                <p key={user.id}>{user.name}</p>
            )))}
        </div>
    )
}



export default IncrementalStaticRegeneration;