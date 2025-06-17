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
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto space-y-6 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center">Upload Interface</h1>

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
          className="flex flex-col items-center justify-center p-8 bg-gray-50 border-2 border-dashed border-gray-300 rounded-md text-gray-600"
          onDrop={onDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <p className="text-sm">Drag & Drop files here</p>
          <input type="file" multiple onChange={onFileChange} className="mt-4" />
        </div>


      {files.length > 0 && (
        <table className="min-w-full table-auto border divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2 text-left">Name</th>
              <th className="border px-3 py-2 text-left">Size</th>
              <th className="border px-3 py-2 text-left">UUID</th>
              <th className="border px-3 py-2 text-left">Status</th>
              <th className="border px-3 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {files.map((f) => (
              <tr key={f.id} className="hover:bg-gray-50">
                <td className="border px-3 py-2">{f.file.name}</td>
                <td className="border px-3 py-2">{(f.file.size / 1024).toFixed(1)} KB</td>
                <td className="border px-3 py-2">{f.id}</td>
                <td className={`border px-3 py-2 ${f.status === 'ready' ? 'text-green-600' : ''}`}>{f.status}</td>
                <td className="border px-3 py-2 text-center">
                  <button
                    className="text-red-500 hover:text-red-700 hover:underline"
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
        <button className="bg-blue-600 hover:bg-blue-700 text-white uppercase font-semibold px-5 py-2 rounded-md">Upload</button>
        <button
          className="bg-gray-600 hover:bg-gray-700 text-white uppercase font-semibold px-5 py-2 rounded-md"
          onClick={clearFiles}
        >
          Clear
        </button>
      </div>
    </div>
  </div>
  );
};

export default App;
