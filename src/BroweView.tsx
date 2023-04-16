import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function BrowseView() {
    const {"*": dirpath} = useParams();
    const [entries, setEntries] = useState<{
        dirs: string[], files: { filename: string, lastModified: string, createdAt: string, size: number }[]
    }>({
        dirs: [], files: []
    })
    useEffect(() => {
        fetch(`/dir/${dirpath}`).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                alert(res.statusText)
                return entries
            }
        }).then(result => setEntries(result))
        .catch(() => alert("Network error"))
    }, [dirpath])
    const { dirs, files } = entries;
    return <div>
        <h2>Directories</h2>
        <ul>
            {
                dirs.map((dir, idx) => <li key={idx}><Link to={`/browse/${dirpath}/${dir}`}>{dir}</Link></li>)
            }
        </ul>
        <h2>Files</h2>
        <div>
            {
                files.map((file, idx) => <div key={idx}>
                    <a href={`/file/${dirpath}/${file.filename}`}>{file.filename}</a>
                    <p>修改时间：{file.lastModified}, 创建时间：{file.createdAt} 大小：{file.size}</p>
                </div>)
            }
        </div>
    </div>
}