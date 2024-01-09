function useDynamicPage(){
      const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
          thumbnailWidth: 10,
          thumbnailHeight: 10,
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
          thumbnailWidth: 10,
          thumbnailHeight: 10,
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
          thumbnailWidth: 10,
          thumbnailHeight: 10,
        },
      ];

      const details = [
        { category: "Type", value: "Single Family Home" },
        { category: "Bedrooms", value: "3" },
        { category: "Bathrooms", value: "2" },
        { category: "Square Feet", value: "1,500" },
        // Add more details as needed
      ];
    return { images, details };
}

export default useDynamicPage