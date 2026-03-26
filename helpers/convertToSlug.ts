import unidecode from "unidecode"
export const convertToSlug = (text:string) =>{
  const unidecodeText = unidecode(text.trim()) // Loại bỏ dấu và khoảng trắng ở đầu và cuối và xóa dấu của chuỗi
  const slug: string = unidecodeText.replace(/\s+/g, "-") // Thay thế khoảng trắng bằng dấu gạch ngang
  .toLowerCase() // Chuyển đổi thành chữ thường
  return slug
}