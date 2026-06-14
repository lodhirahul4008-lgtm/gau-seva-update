import React, { useState } from "react";
import { MessageSquare, Heart, Globe, Plus, Smile, Send, ExternalLink } from "lucide-react";
import { SocialPost } from "../types";

export default function CommunityWall() {
  const [posts, setPosts] = useState<SocialPost[]>([
    {
      id: "p1",
      author: "Gau Seva Trust",
      avatarChar: "G",
      timestamp: "2 hours ago",
      text: "Today we welcomed two abandoned calves to our Rishikesh sanctuary. They are now safe, fed, and receiving immediate medical attention. Thank you to everyone who supports our mission! 🙏🐄",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAB2BRqmGtvb3cO6QC9vzTj17KUfLRE3fMZgw2I1ntFilgvQL9aPsHJM4Fk3S_0MBpjM3L695FYvN5o_Bo7qXzRK1-1yYXsckED_GWeR0u2CaOvZd4IkD8F2ymqSvHuPFlAsCylniZaV4Z3GEP9dCgrdEpIkgRGSjJQDrY9cFt4Se5zN67f64c9li7HfOkELEvZxBoCmjxU9xx0iN4rZ6u6KZiuqKQbP-CDtVay_XdBuIeq8XJAS04VO4_zD9vWwVH1N5KA1Boe60o",
      likes: 428,
      comments: [
        "Suhail Kumar: God bless these kind spirits!",
        "Ragini Dutt: Happy to see them safe and fed.",
      ],
      isLikedByUser: false,
    },
    {
      id: "p2",
      author: "Gau Seva Trust",
      avatarChar: "G",
      timestamp: "Yesterday",
      text: "The evening Aarti at Krishna Seva Dham. May the blessings of Gau Mata bring peace and prosperity to all our wonderful donors and devotees. ✨📽️",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbH15eCo_vkKOr95wDAbNaUp3wfluSRSTr0dwaJktIE64kjuUIiw0l-QvP7NPKrLTHyysZIApLvENSxDe86IbBEFefuqOiYota3I5OUgPZy3XIGt40D-pTUqXRMpWFPjX5Hdf_fDM0gjE2GiYR5aMWw3kZHMWBemH7jkNnSe_qsV_RA9TEh0IKYUEfc2s4lru_1vn7--MSkoZrTav7A6ptD449P132T9k986-HK9po64r4F6axpJENlRJgcRQzkzC4bhgtr7b_gw8",
      likes: 1205,
      comments: [
        "Amit Trivedi: Beautiful evening sight! Om Namo Bhagavate.",
        "Meera Nair: Such absolute tranquility. Pranam!"
      ],
      isLikedByUser: false,
    },
  ]);

  const [creatorOpen, setCreatorOpen] = useState(false);
  const [authorName, setAuthorName] = useState("");
  const [postText, setPostText] = useState("");
  const [activePostCommentsIdx, setActivePostCommentsIdx] = useState<string | null>(null);
  const [newCommentInput, setNewCommentInput] = useState("");

  const handleLike = (id: string) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === id) {
          const isLiked = !post.isLikedByUser;
          return {
            ...post,
            isLikedByUser: isLiked,
            likes: isLiked ? post.likes + 1 : post.likes - 1,
          };
        }
        return post;
      })
    );
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !postText.trim()) return;

    const newPost: SocialPost = {
      id: `p-${Date.now()}`,
      author: authorName,
      avatarChar: authorName.substring(0, 1).toUpperCase(),
      timestamp: "Just Now",
      text: postText,
      likes: 1,
      comments: [],
      isLikedByUser: true,
    };

    setPosts([newPost, ...posts]);
    setAuthorName("");
    setPostText("");
    setCreatorOpen(false);
  };

  const handlePostComment = (postId: string) => {
    if (!newCommentInput.trim()) return;
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, `Devotee (You): ${newCommentInput}`],
          };
        }
        return post;
      })
    );
    setNewCommentInput("");
  };

  return (
    <section id="community" className="py-24 md:py-32 bg-slate-50/75">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left panel text & CTA section */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 text-left">
              <div className="inline-flex items-center gap-2 text-[#1877F2] font-bold mb-4 font-sans text-sm">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
                Community Portal
              </div>
              
              <h2 className="font-serif text-3xl md:text-headline-lg text-on-surface mb-6 font-bold leading-tight">
                Join Our Global <br />
                <span className="text-primary italic">Seva Sangha</span>
              </h2>
              
              <p className="font-sans text-sm md:text-base text-on-surface-variant mb-8 leading-relaxed">
                Tune in to discover daily rescue chronicles, virtual feeding darshans, and uplifting prayers submitted by our 100,000+ national community members. 
              </p>

              <button
                onClick={() => setCreatorOpen(true)}
                className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 px-6 py-3.5 rounded-2xl font-sans font-bold text-sm transition-all mb-4 w-full justify-center shadow-sm cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Post Your Blessing & Prayer
              </button>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#1877F2] hover:bg-[#1565C0] text-white px-6 py-3.5 rounded-2xl font-sans font-bold text-sm transition-all shadow-md w-full justify-center cursor-pointer"
              >
                Visit Our Official Facebook
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right panel interactive feeds */}
          <div className="lg:w-2/3">
            
            {/* Post Blessing Creator form widget */}
            {creatorOpen && (
              <div className="bg-white rounded-3xl p-6 border-2 border-primary-fixed shadow-xl mb-8 animate-fade-in text-left">
                <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
                  <h4 className="font-serif text-base font-extrabold text-on-surface">
                    Write Your Blessing / Prayer Box
                  </h4>
                  <button
                    onClick={() => setCreatorOpen(false)}
                    className="text-xs text-on-surface-variant font-bold hover:underline cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
                
                <form onSubmit={handleCreatePost} className="space-y-4">
                  <div>
                    <label className="block text-[10.5px] uppercase font-bold tracking-wider text-on-surface-variant mb-1 font-sans">
                      Your Spiritual Name / Devotee Location
                    </label>
                    <input
                      required
                      type="text"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder="e.g. Anand from Mumbai"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-sans text-on-surface focus:outline-none focus:border-primary focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[10.5px] uppercase font-bold tracking-wider text-on-surface-variant mb-1 font-sans">
                      Message / Prayer for Gau Mata
                    </label>
                    <textarea
                      required
                      value={postText}
                      onChange={(e) => setPostText(e.target.value)}
                      rows={3}
                      placeholder="May Gau Mata stay healthy and blessed. Sending flowers..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-sans text-on-surface focus:outline-none focus:border-primary focus:bg-white whitespace-pre-wrap"
                    />
                  </div>

                  <div className="flex justify-end gap-2">
                    <button
                      type="submit"
                      className="btn-gradient text-white px-6 py-2.5 rounded-xl text-xs font-bold cursor-pointer"
                    >
                      Post Blessing Box
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Render Feed List */}
            <div className="space-y-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-3xl p-6 shadow-sm border border-outline-variant/10 text-left transition-shadow duration-300 hover:shadow-md"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-sans">
                        {post.avatarChar}
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-on-surface font-sans">
                          {post.author}
                        </h5>
                        <p className="text-[10px] text-on-surface-variant flex items-center gap-1 font-sans">
                          {post.timestamp} • <Globe className="w-3 h-3 text-on-surface-variant/70" />
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-on-surface-variant mb-4 leading-relaxed font-sans whitespace-pre-line">
                    {post.text}
                  </p>

                  {/* Attachment image */}
                  {post.image && (
                    <div className="w-full h-48 md:h-64 bg-slate-100 rounded-2xl overflow-hidden mb-4 border border-outline-variant/10">
                      <img
                        alt="Community post attachment"
                        className="w-full h-full object-cover"
                        src={post.image}
                      />
                    </div>
                  )}

                  {/* Likes and Comments Counters panel */}
                  <div className="flex justify-between items-center text-xs text-on-surface-variant pt-3 border-t border-slate-100">
                    <div className="flex gap-4">
                      {/* Like button */}
                      <button
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center gap-1.5 hover:text-[#1877F2] font-semibold cursor-pointer ${
                          post.isLikedByUser ? "text-[#1877F2]" : ""
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${post.isLikedByUser ? "fill-current" : ""}`} />
                        <span>Like</span>
                      </button>

                      {/* Comment section expand command toggle */}
                      <button
                        onClick={() =>
                          setActivePostCommentsIdx(
                            activePostCommentsIdx === post.id ? null : post.id
                          )
                        }
                        className={`flex items-center gap-1.5 hover:text-primary font-semibold cursor-pointer ${
                          activePostCommentsIdx === post.id ? "text-primary" : ""
                        }`}
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Comment ({post.comments.length})</span>
                      </button>
                    </div>

                    <span className="text-[11px] font-medium font-sans">
                      {post.likes} Likes
                    </span>
                  </div>

                  {/* Expanded Comment sections area */}
                  {activePostCommentsIdx === post.id && (
                    <div className="mt-4 pt-4 border-t border-slate-100 bg-slate-50/50 p-4 rounded-2xl space-y-3">
                      <div className="space-y-2">
                        {post.comments.map((cmt, cIdx) => (
                          <div key={cIdx} className="bg-white p-2 rounded-xl text-xs border border-slate-100 font-sans shadow-inner">
                            {cmt}
                          </div>
                        ))}
                        {post.comments.length === 0 && (
                          <p className="text-[11px] text-on-surface-variant font-sans italic">
                            No comments yet. Write the first blessed prayer comment!
                          </p>
                        )}
                      </div>

                      {/* Interactive comment form */}
                      <div className="flex gap-2 pt-2">
                        <input
                          type="text"
                          value={newCommentInput}
                          onChange={(e) => setNewCommentInput(e.target.value)}
                          placeholder="Write a blessed comment..."
                          className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-primary text-on-surface font-sans"
                        />
                        <button
                          onClick={() => handlePostComment(post.id)}
                          className="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary-container-highest transition-colors cursor-pointer"
                        >
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
