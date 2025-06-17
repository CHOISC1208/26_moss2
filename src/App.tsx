import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface UploadedFile {
  id: string;
  file: File;
  status: string;
}

const App: React.FC = () => {
  const [objective, setObjective] = useState('option1');
  const [timeLimit, setTimeLimit] = useState(60);
  const [files, setFiles] = useState<UploadedFile[]>([]);

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    const newFiles: UploadedFile[] = Array.from(fileList).map((file) => ({
      id: uuidv4(),
      file,
      status: 'ready',
    }));
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const clearFiles = () => setFiles([]);

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Upload Interface</h1>

      <div className="space-y-2">
        <label className="block">
          <span className="mr-2">Objective Function:</span>
          <select
            className="border rounded p-1"
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </label>

        <label className="block">
          <span className="mr-2">MILP Time Limit:</span>
          <input
            type="number"
            className="border rounded p-1 w-32"
            value={timeLimit}
            onChange={(e) => setTimeLimit(Number(e.target.value))}
          />
        </label>
      </div>

      <div
        className="border-2 border-dashed rounded p-6 text-center"
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <p>Drag & Drop files here</p>
        <input type="file" multiple onChange={onFileChange} className="mt-2" />
      </div>

      {files.length > 0 && (
        <table className="min-w-full table-auto border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2">Name</th>
              <th className="border px-2">Size</th>
              <th className="border px-2">UUID</th>
              <th className="border px-2">Status</th>
              <th className="border px-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {files.map((f) => (
              <tr key={f.id} className="text-sm">
                <td className="border px-2 py-1">{f.file.name}</td>
                <td className="border px-2 py-1">{(f.file.size / 1024).toFixed(1)} KB</td>
                <td className="border px-2 py-1">{f.id}</td>
                <td className="border px-2 py-1">{f.status}</td>
                <td className="border px-2 py-1 text-center">
                  <button
                    className="text-red-500"
                    onClick={() => removeFile(f.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">UPLOAD</button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={clearFiles}
        >
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default App;
