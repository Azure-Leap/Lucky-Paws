// import React, { useState } from "react";
// import dynamic from "next/dynamic";
// const Avatar = dynamic(() => import("react-avatar-edit"), { ssr: false });

// const ProfileImgEdit = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editedImage, setEditedImage] = useState("");
//   const [originalImage, setOriginalImage] = useState(
//     "https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg"
//   );

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setEditedImage("");
//   };

//   const handleSave = (editedImage: any) => {
//     setEditedImage(editedImage);
//   };

//   const handleConfirmSave = () => {
//     setOriginalImage(editedImage);
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="my-5 justify-self-center">
//       <img
//         className="w-28 h-28 p-1 rounded-full ring-2 ring-gray-500"
//         src={editedImage || originalImage}
//         alt="profileImg"
//       />
//       <div className="text-center">
//         <button
//           className="text-base font-medium text-indigo-400 pt-3 hover:text-indigo-800"
//           onClick={handleOpenModal}
//         >
//           edit picture
//         </button>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-10">
//           <div className="">
//             <Avatar
//               width={250}
//               height={250}
//               onCrop={handleSave}
//               onClose={handleCloseModal}
//             />
//             <div className="flex justify-between mt-4">
//               <button
//                 className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
//                 onClick={handleCloseModal}
//               >
//                 Close
//               </button>
//               <button
//                 className="px-4 py-2 bg-indigo-500 text-white rounded-lg"
//                 onClick={handleConfirmSave}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileImgEdit;
