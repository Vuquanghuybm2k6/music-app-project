import { Request, Response } from "express"


// [GET]: /admin/dashboard
export const index = async (req: Request, res: Response) => {
  // view hiện tại đang nằm ở views/admin/pages/index.pug
  // Hoặc nếu bạn muốn cấu trúc folder: views/admin/pages/dashboard/index.pug, hãy tạo file đó.
  res.render("admin/pages/dashboard/index", {
    pageTitle: "Trang tổng quan",
  })
}