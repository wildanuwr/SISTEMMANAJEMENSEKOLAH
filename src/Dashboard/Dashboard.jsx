import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";
import NavbarDashboard from "../Component/NavbarDashboard";
import profilePicture from "../assets/wildanu.jpg"; // Mengimpor foto dari aset
import postImage from "../assets/wildanu.jpg"; // Mengimpor foto untuk postingan baru
import { AiOutlineUpload } from "react-icons/ai"; // Mengimpor ikon upload
import { Editor } from '@tinymce/tinymce-react'; // Mengimpor TinyMCE Editor

const Dashboard = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: "Ahmad Wildanu Wahyu Ramadhan",
        profilePicture: profilePicture, // Menggunakan foto yang diimpor
      },
      description: "Apa yang kalian ketahui tentang pentingnya pendidikan karakter di sekolah?",
      likes: 0,
      comments: [
        { text: "Pendidikan karakter sangat penting untuk membentuk kepribadian siswa.", user: { name: "User1", profilePicture: profilePicture }, replies: [], likes: 0 },
        { text: "Saya setuju, itu membantu siswa menjadi lebih bertanggung jawab.", user: { name: "User2", profilePicture: profilePicture }, replies: [], likes: 0 },
      ],
    },
    {
      id: 2,
      user: {
        name: "Jane Smith",
        profilePicture: profilePicture, // Menggunakan foto yang diimpor
      },
      description: "Mengapa kita perlu belajar matematika dalam kehidupan sehari-hari?",
      likes: 0,
      comments: [
        { text: "Matematika membantu kita dalam pengambilan keputusan yang logis.", user: { name: "User3", profilePicture: profilePicture }, replies: [], likes: 0 },
        { text: "Kita sering menggunakan matematika tanpa kita sadari, seperti saat berbelanja.", user: { name: "User4", profilePicture: profilePicture }, replies: [], likes: 0 },
      ],
    },
    {
      id: 3,
      user: {
        name: "Michael Johnson",
        profilePicture: profilePicture, // Menggunakan foto yang diimpor
      },
      description: "Apa manfaat membaca buku bagi siswa?",
      likes: 0,
      comments: [
        { text: "Membaca buku dapat meningkatkan pengetahuan dan imajinasi.", user: { name: "User5", profilePicture: profilePicture }, replies: [], likes: 0 },
        { text: "Buku juga membantu kita memahami berbagai perspektif.", user: { name: "User6", profilePicture: profilePicture }, replies: [], likes: 0 },
      ],
    },
    {
      id: 4, // Postingan baru
      user: {
        name: "Alice Johnson",
        profilePicture: profilePicture, // Menggunakan foto yang diimpor
      },
      description: "Belajar bahasa asing sangat bermanfaat untuk karir.",
      likes: 0,
      comments: [],
      image: postImage, // Menambahkan gambar untuk postingan baru dengan desain yang menarik
    },
  ]);

  const [newPost, setNewPost] = useState(""); // State untuk inputan postingan baru
  const [newPostImage, setNewPostImage] = useState(null); // State untuk gambar/video postingan baru

  const handleLike = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
  };

  const handleComment = (id, comment) => {
    setPosts(posts.map(post => post.id === id ? { ...post, comments: [...post.comments, { text: comment, user: { name: "User7", profilePicture: profilePicture }, replies: [], likes: 0 }] } : post));
  };

  const handleReply = (postId, commentIndex, reply) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        const updatedComments = [...post.comments];
        updatedComments[commentIndex].replies.push({ text: reply, user: { name: "User8", profilePicture: profilePicture }, likes: 0 });
        return { ...post, comments: updatedComments };
      }
      return post;
    }));
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost) {
      const newPostData = {
        id: posts.length + 1,
        user: {
          name: "Anda",
          profilePicture: profilePicture,
        },
        description: newPost,
        likes: 0,
        comments: [],
        image: newPostImage, // Menambahkan gambar/video ke postingan baru
      };
      setPosts([newPostData, ...posts]);
      setNewPost(""); // Reset input setelah posting
      setNewPostImage(null); // Reset gambar/video setelah posting
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <NavbarDashboard />
      <div className="flex">
        <Sidebar />
        {/* Content Area */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Selamat Datang, Ahmad Wildanu Wahyu Ramadhan! 👋
            </h1>
            <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
              <form onSubmit={handlePostSubmit} className="flex items-start">
                <img src={profilePicture} alt="Profile" className="h-10 w-10 rounded-full mr-4" />
                <div className="flex-1">
                  <Editor
                    initialValue="<p>Tulis postingan baru...</p>"
                    init={{
                      height: 200,
                      menubar: false,
                      plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                      ],
                      toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | link image',
                    }}
                    onEditorChange={(content) => setNewPost(content)}
                    required
                  />
                  <label className="flex items-center mt-2 cursor-pointer">
                    <AiOutlineUpload className="text-gray-500 mr-2" size={24} />
                    <input
                      type="file"
                      accept="image/*,video/*"
                      onChange={(e) => setNewPostImage(URL.createObjectURL(e.target.files[0]))}
                      className="hidden"
                    />
                    <span className="text-blue-500">Upload Foto/Video</span>
                  </label>
                  {newPostImage && (
                    <div className="mb-4">
                      <img src={newPostImage} alt="Preview" className="rounded-lg w-1/3 h-auto" />
                    </div>
                  )}
                </div>
                <button type="submit" className="ml-4 bg-blue-500 text-white rounded-lg px-4 py-2">
                  Kirim Postingan
                </button>
              </form>
            </div>
            <div className="space-y-6">
              {posts.map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow-lg p-6 border border-gray-300 transition-transform transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <img src={post.user.profilePicture} alt={`${post.user.name}'s profile`} className="h-10 w-10 rounded-full mr-4" />
                    <p className="text-lg font-semibold text-gray-800">{post.user.name}</p>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: post.description }} className="text-gray-600 mb-4" />
                  {post.image && <div className="flex justify-center mb-4"><img src={post.image} alt="Post" className="rounded-lg w-1/3 h-auto" /></div>} {/* Menampilkan gambar jika ada */}
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <button onClick={() => handleLike(post.id)} className="text-blue-500 hover:text-blue-600 mr-4">
                        👍 {post.likes} Like
                      </button>
                      <button className="text-blue-500 hover:text-blue-600">
                        🔄 Share
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 flex">
                    <input
                      type="text"
                      placeholder="Tulis komentar..."
                      className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && e.target.value) {
                          handleComment(post.id, e.target.value);
                          e.target.value = '';
                        }
                      }}
                    />
                    <button 
                      onClick={() => {
                        const input = document.querySelector(`input[placeholder="Tulis komentar..."]`);
                        if (input.value) {
                          handleComment(post.id, input.value);
                          input.value = '';
                        }
                      }} 
                      className="ml-2 bg-blue-500 text-white rounded-lg px-4 py-2">
                      Kirim
                    </button>
                  </div>
                  <div className="mt-2 space-y-2">
                    {post.comments.map((comment, commentIndex) => (
                      <div key={commentIndex} className="bg-gray-100 p-2 rounded-lg flex flex-col">
                        <div className="flex items-center">
                          <img src={comment.user.profilePicture} alt={`${comment.user.name}'s profile`} className="h-8 w-8 rounded-full mr-2" />
                          <div>
                            <p className="font-semibold">{comment.user.name}</p>
                            <p className="text-gray-600 text-sm">{comment.text}</p>
                            <div className="flex items-center mt-1">
                              <button onClick={() => {
                                const updatedComments = [...post.comments];
                                updatedComments[commentIndex].likes += 1;
                                setPosts(posts.map(p => p.id === post.id ? { ...p, comments: updatedComments } : p));
                              }} className="text-red-500 mr-4">
                                ❤️ {comment.likes} Like
                              </button>
                              <button 
                                onClick={() => {
                                  const replyInput = document.querySelector(`#reply-input-${post.id}-${commentIndex}`);
                                  if (replyInput) {
                                    replyInput.classList.toggle('hidden');
                                  }
                                }} 
                                className="text-blue-500">Balas</button>
                            </div>
                          </div>
                        </div>
                        <input 
                          id={`reply-input-${post.id}-${commentIndex}`} 
                          type="text" 
                          placeholder="Tulis balasan..." 
                          className="border border-gray-300 rounded-lg p-2 w-full mt-2 hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && e.target.value) {
                              handleReply(post.id, commentIndex, e.target.value);
                              e.target.value = '';
                            }
                          }}
                        />
                        <div className="mt-2 space-y-1">
                          {comment.replies.map((reply, replyIndex) => (
                            <div key={replyIndex} className="bg-gray-200 p-2 rounded-lg flex items-center">
                              <img src={reply.user.profilePicture} alt={`${reply.user.name}'s profile`} className="h-6 w-6 rounded-full mr-2" />
                              <div>
                                <p className="font-semibold">{reply.user.name}</p>
                                <p className="text-gray-600 text-sm">{reply.text}</p>
                                <div className="flex items-center mt-1">
                                  <button onClick={() => {
                                    const updatedReplies = [...comment.replies];
                                    updatedReplies[replyIndex].likes += 1;
                                    setPosts(posts.map(p => p.id === post.id ? {
                                      ...p,
                                      comments: p.comments.map((c, i) => i === commentIndex ? { ...c, replies: updatedReplies } : c)
                                    } : p));
                                  }} className="text-red-500 mr-4">
                                    ❤️ {reply.likes} Like
                                  </button>
                                  <button 
                                    onClick={() => {
                                      const replyInput = document.querySelector(`#reply-input-${post.id}-${commentIndex}-${replyIndex}`);
                                      if (replyInput) {
                                        replyInput.classList.toggle('hidden');
                                      }
                                    }} 
                                    className="text-blue-500">Balas</button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
