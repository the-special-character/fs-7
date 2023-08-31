
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "aucotsc@gmail.com",
    pass: "szzcdviwenjreabv",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {

    const arr = [
        
    ]


  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Yagnesh Modh 👻" <aucotsc@gmail.com>', // sender address
    to: "bhattshalin87@gmail.com, shalinbhatt87@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<center style="width: 100%; background: #ffffff">
    <div style="max-width: 600px; margin: auto">
      <table
        align="center"
        bgcolor="#e9eae3"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="
          max-width: 600px;
          border: 1px solid transparent;
          border-radius: 20px;
          overflow: hidden;
        "
        width="100%"
      >
        <tbody>
          <tr>
            <td
              align="center"
              style="padding-top: 20px; padding-bottom: 20px"
              valign="top"
            >
              <img
                align="center"
                alt="Scaler logo"
                class="m_-3240178940513258793img-mob CToWUd"
                height=""
                src="https://ci6.googleusercontent.com/proxy/H-4ja3rrIdE5D_5V3L_Dogj8OktWAJnZ4cSiUgQ06wbM4seUu2icgN_WVNi7yaQX3KsZ76s8-I5Ff4VF7iRRvStnYvnAvB1S4BxLMTs07Ry_TC99gDqMcJWp-aHpc9liXTP4eP67fKmhjg=s0-d-e1-ft#https://email-editor-resources.s3.amazonaws.com/images/we134105a60/Mar/Scaler-Logo2.png"
                width="180"
                data-bit="iit"
              />
            </td>
          </tr>
          <tr>
            <td
              align="center"
              bgcolor="#e9eae3"
              height="100%"
              style="background: #e9eae3"
              valign="top"
              width="100%"
            >
              <table
                align="center"
                bgcolor="#ffffff"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="m_-3240178940513258793outertab-1"
                role="presentation"
                style="
                  max-width: 570px;
                  border: 1px solid transparent;
                  border-radius: 20px 20px 0px 0;
                  overflow: hidden;
                "
                width="100%"
              >
                <tbody>
                  <tr>
                    <td
                      align="center"
                      style="
                        font-size: 0;
                        padding-top: 30px;
                        padding-bottom: 30px;
                      "
                      valign="top"
                    >
                      <div
                        class="m_-3240178940513258793tab-inner-1"
                        style="
                          display: inline-block;
                          margin: 0 0px;
                          max-width: 500px;
                          min-width: 160px;
                          vertical-align: top;
                          width: 100%;
                        "
                      >
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  font-family: 'Montserrat', Arial, sans-serif;
                                  font-size: 14px;
                                  line-height: 20px;
                                  color: #364663;
                                  text-align: left;
                                  padding-bottom: 10px;
                                  font-weight: 400;
                                  padding-top: 5px;
                                "
                              >
                                Hey!
                              </td>
                            </tr>
                            <tr>
                              <td
                                style="
                                  font-family: 'Montserrat', Arial, sans-serif;
                                  font-size: 14px;
                                  line-height: 20px;
                                  color: #364663;
                                  text-align: left;
                                  padding-bottom: 20px;
                                  font-weight: 400;
                                  padding-top: 0px;
                                "
                              >
                                To help you in your career journey, we have
                                lined up exclusive free events for you in the
                                coming week:
                              </td>
                            </tr>
                            <tr>
                              <td
                                style="
                                  font-family: 'Montserrat', Arial, sans-serif;
                                  font-size: 14px;
                                  line-height: 20px;
                                  color: #364663;
                                  text-align: left;
                                  padding-bottom: 10px;
                                  font-weight: bold;
                                  padding-top: 0px;
                                "
                              >
                                1. Master Backtracking: From Basics to
                                Advanced for SDEs<br />
                              </td>
                            </tr>
                            <tr>
                              <td
                                style="
                                  font-family: 'Montserrat', Arial, sans-serif;
                                  font-size: 14px;
                                  line-height: 20px;
                                  color: #364663;
                                  text-align: left;
                                  padding-bottom: 10px;
                                  font-weight: 400;
                                  padding-top: 0px;
                                "
                              >
                                Register&nbsp;to&nbsp;get an in-depth
                                understanding of Backtracking from Basics to
                                Advance<br />
                              </td>
                            </tr>
                            <tr>
                              <td
                                style="
                                  font-family: 'Montserrat', Arial, sans-serif;
                                  font-size: 14px;
                                  line-height: 20px;
                                  color: #364663;
                                  text-align: left;
                                  padding-bottom: 10px;
                                  font-weight: 400;
                                  padding-top: 0px;
                                "
                              >
                                <strong>Date</strong>: August 31st, Thursday,
                                at 8 PM
                              </td>
                            </tr>
                            <tr>
                              <td
                                style="
                                  font-family: 'Montserrat', Arial, sans-serif;
                                  font-size: 14px;
                                  line-height: 20px;
                                  color: #364663;
                                  text-align: left;
                                  padding-bottom: 20px;
                                  font-weight: 400;
                                  padding-top: 0px;
                                "
                              >
                                <a
                                  href="https://c.webengage.com/lw/g1.jpg?p=eyJsYyI6In4xMzQxMDVhNjAiLCJsIjoiZWE3NTYxYzI3N2Y2ZGEyMDdmOTVhYjUwMDM3MmJjNjk5Yjg0MTFjYyIsImMiOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZW0iOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZSI6In5hMmtibWIiLCJ2IjoifjM2YzBvbDgiLCJzIjoiNDFnMTk2ODc4MDQzZWhpX2E5N2MyNzAzLWEyNWUtNDZjNi05NjVkLTY1NzFiNjA5MDg3ODoxNjkzMzA4OTQxMTUxIiwiZXZlbnQiOiJlbWFpbF9jbGljayIsImN0YSI6In41ODAyMGU1OCIsInRvVVJMIjoiaHR0cHM6Ly93d3cuc2NhbGVyLmNvbS9ldmVudC9tYXN0ZXItYmFja3RyYWNraW5nLS1mcm9tLWJhc2ljcy10by1hZHZhbmNlZC1mb3Itc2Rlcy0wOC8%2FdXRtX21lZGl1bT1lbWFpbCZ1dG1fc291cmNlPW1pZGZ1bm5lbCZ1dG1fY2FtcGFpZ249YmF1LWNhbXBhaWduX2FjYWRlbXlffmEya2JtYl9BdWd1c3QtMjAyMy13NF9wYW5JbmRpYV9hY3RpdmVfbGVhZGdlbiZ1dG1fY29udGVudD1fbWNfIn0%3D"
                                  rel="noopener"
                                  style="color: #0043c9; font-weight: bold"
                                  target="_blank"
                                  data-saferedirecturl="https://www.google.com/url?q=https://c.webengage.com/lw/g1.jpg?p%3DeyJsYyI6In4xMzQxMDVhNjAiLCJsIjoiZWE3NTYxYzI3N2Y2ZGEyMDdmOTVhYjUwMDM3MmJjNjk5Yjg0MTFjYyIsImMiOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZW0iOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZSI6In5hMmtibWIiLCJ2IjoifjM2YzBvbDgiLCJzIjoiNDFnMTk2ODc4MDQzZWhpX2E5N2MyNzAzLWEyNWUtNDZjNi05NjVkLTY1NzFiNjA5MDg3ODoxNjkzMzA4OTQxMTUxIiwiZXZlbnQiOiJlbWFpbF9jbGljayIsImN0YSI6In41ODAyMGU1OCIsInRvVVJMIjoiaHR0cHM6Ly93d3cuc2NhbGVyLmNvbS9ldmVudC9tYXN0ZXItYmFja3RyYWNraW5nLS1mcm9tLWJhc2ljcy10by1hZHZhbmNlZC1mb3Itc2Rlcy0wOC8%252FdXRtX21lZGl1bT1lbWFpbCZ1dG1fc291cmNlPW1pZGZ1bm5lbCZ1dG1fY2FtcGFpZ249YmF1LWNhbXBhaWduX2FjYWRlbXlffmEya2JtYl9BdWd1c3QtMjAyMy13NF9wYW5JbmRpYV9hY3RpdmVfbGVhZGdlbiZ1dG1fY29udGVudD1fbWNfIn0%253D&amp;source=gmail&amp;ust=1693430344487000&amp;usg=AOvVaw1BUZ_eCgumoPGtAcqFSuZL"
                                  >Register Now</a
                                >
                              </td>
                            </tr>
                            <tr>
                              <td
                                style="
                                  font-family: 'Montserrat', Arial, sans-serif;
                                  font-size: 14px;
                                  line-height: 20px;
                                  color: #364663;
                                  text-align: left;
                                  padding-bottom: 10px;
                                  font-weight: bold;
                                  padding-top: 0px;
                                "
                              >
                                2. How to command high salaries as a software
                                engineer<br />
                              </td>
                            </tr>
                            <tr>
                              <td
                                style="
                                  font-family: 'Montserrat', Arial, sans-serif;
                                  font-size: 14px;
                                  line-height: 20px;
                                  color: #364663;
                                  text-align: left;
                                  padding-bottom: 10px;
                                  font-weight: 400;
                                  padding-top: 0px;
                                "
                              >
                                Register to gain valuable insights on how to
                                command a high salary as a software
                                engineer.<br />
                              </td>
                            </tr>
                            <tr>
                              <td
                                style="
                                  font-family: 'Montserrat', Arial, sans-serif;
                                  font-size: 14px;
                                  line-height: 20px;
                                  color: #364663;
                                  text-align: left;
                                  padding-bottom: 10px;
                                  font-weight: 400;
                                  padding-top: 0px;
                                "
                              >
                                <strong>Date</strong>: September 3rd, Sunday,
                                at 5 PM
                              </td>
                            </tr>
                            <tr>
                              <td
                                style="
                                  font-family: 'Montserrat', Arial, sans-serif;
                                  font-size: 14px;
                                  line-height: 20px;
                                  color: #364663;
                                  text-align: left;
                                  padding-bottom: 20px;
                                  font-weight: 400;
                                  padding-top: 0px;
                                "
                              >
                                <a
                                  href="https://c.webengage.com/lw/g1.jpg?p=eyJsYyI6In4xMzQxMDVhNjAiLCJsIjoiZWE3NTYxYzI3N2Y2ZGEyMDdmOTVhYjUwMDM3MmJjNjk5Yjg0MTFjYyIsImMiOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZW0iOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZSI6In5hMmtibWIiLCJ2IjoifjM2YzBvbDgiLCJzIjoiNDFnMTk2ODc4MDQzZWhpX2E5N2MyNzAzLWEyNWUtNDZjNi05NjVkLTY1NzFiNjA5MDg3ODoxNjkzMzA4OTQxMTUxIiwiZXZlbnQiOiJlbWFpbF9jbGljayIsImN0YSI6In40YjM1Y2IyMCIsInRvVVJMIjoiaHR0cHM6Ly93d3cuc2NhbGVyLmNvbS9ldmVudC9ob3ctdG8tY29tbWFuZC1oaWdoLXNhbGFyaWVzLWFzLWEtc29mdHdhcmUtZW5naW5lZXItMDgvP3V0bV9tZWRpdW09ZW1haWwmdXRtX3NvdXJjZT1taWRmdW5uZWwmdXRtX2NhbXBhaWduPWJhdS1jYW1wYWlnbl9hY2FkZW15X35hMmtibWJfQXVndXN0LTIwMjMtdzRfcGFuSW5kaWFfYWN0aXZlX2xlYWRnZW4mdXRtX2NvbnRlbnQ9X21jXyJ9"
                                  rel="noopener"
                                  style="color: #0043c9; font-weight: bold"
                                  target="_blank"
                                  data-saferedirecturl="https://www.google.com/url?q=https://c.webengage.com/lw/g1.jpg?p%3DeyJsYyI6In4xMzQxMDVhNjAiLCJsIjoiZWE3NTYxYzI3N2Y2ZGEyMDdmOTVhYjUwMDM3MmJjNjk5Yjg0MTFjYyIsImMiOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZW0iOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZSI6In5hMmtibWIiLCJ2IjoifjM2YzBvbDgiLCJzIjoiNDFnMTk2ODc4MDQzZWhpX2E5N2MyNzAzLWEyNWUtNDZjNi05NjVkLTY1NzFiNjA5MDg3ODoxNjkzMzA4OTQxMTUxIiwiZXZlbnQiOiJlbWFpbF9jbGljayIsImN0YSI6In40YjM1Y2IyMCIsInRvVVJMIjoiaHR0cHM6Ly93d3cuc2NhbGVyLmNvbS9ldmVudC9ob3ctdG8tY29tbWFuZC1oaWdoLXNhbGFyaWVzLWFzLWEtc29mdHdhcmUtZW5naW5lZXItMDgvP3V0bV9tZWRpdW09ZW1haWwmdXRtX3NvdXJjZT1taWRmdW5uZWwmdXRtX2NhbXBhaWduPWJhdS1jYW1wYWlnbl9hY2FkZW15X35hMmtibWJfQXVndXN0LTIwMjMtdzRfcGFuSW5kaWFfYWN0aXZlX2xlYWRnZW4mdXRtX2NvbnRlbnQ9X21jXyJ9&amp;source=gmail&amp;ust=1693430344487000&amp;usg=AOvVaw3xCaaTDtfMZiKXDgTTDVwN"
                                  >Register Now</a
                                >
                              </td>
                            </tr>
                            <tr>
                              <td
                                style="
                                  font-family: 'Montserrat', Arial, sans-serif;
                                  font-size: 14px;
                                  line-height: 20px;
                                  color: #364663;
                                  text-align: left;
                                  padding-bottom: 0px;
                                  font-weight: 400;
                                  padding-top: 0px;
                                "
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style="
                                          font-family: 'Montserrat', Arial,
                                            sans-serif;
                                          font-size: 14px;
                                          line-height: 20px;
                                          color: #364663;
                                          text-align: left;
                                          padding-bottom: 10px;
                                          font-weight: bold;
                                          padding-top: 0px;
                                        "
                                      >
                                        3. Roadmap to a Successful Backend
                                        Career<br />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        style="
                                          font-family: 'Montserrat', Arial,
                                            sans-serif;
                                          font-size: 14px;
                                          line-height: 20px;
                                          color: #364663;
                                          text-align: left;
                                          padding-bottom: 10px;
                                          font-weight: 400;
                                          padding-top: 0px;
                                        "
                                      >
                                        Register to learn about Interview
                                        preparation strategy for top product
                                        companies<br />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        style="
                                          font-family: 'Montserrat', Arial,
                                            sans-serif;
                                          font-size: 14px;
                                          line-height: 20px;
                                          color: #364663;
                                          text-align: left;
                                          padding-bottom: 10px;
                                          font-weight: 400;
                                          padding-top: 0px;
                                        "
                                      >
                                        <strong>Date: </strong>August 30th,
                                        Wednesday, at 7 PM
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        style="
                                          font-family: 'Montserrat', Arial,
                                            sans-serif;
                                          font-size: 14px;
                                          line-height: 20px;
                                          color: #364663;
                                          text-align: left;
                                          padding-bottom: 20px;
                                          font-weight: 400;
                                          padding-top: 0px;
                                        "
                                      >
                                        <a
                                          href="https://c.webengage.com/lw/g1.jpg?p=eyJsYyI6In4xMzQxMDVhNjAiLCJsIjoiZWE3NTYxYzI3N2Y2ZGEyMDdmOTVhYjUwMDM3MmJjNjk5Yjg0MTFjYyIsImMiOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZW0iOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZSI6In5hMmtibWIiLCJ2IjoifjM2YzBvbDgiLCJzIjoiNDFnMTk2ODc4MDQzZWhpX2E5N2MyNzAzLWEyNWUtNDZjNi05NjVkLTY1NzFiNjA5MDg3ODoxNjkzMzA4OTQxMTUxIiwiZXZlbnQiOiJlbWFpbF9jbGljayIsImN0YSI6IjU2ZTRlMGRkIiwidG9VUkwiOiJodHRwczovL3d3dy5zY2FsZXIuY29tL2V2ZW50L3JvYWRtYXAtdG8tYS1zdWNjZXNzZnVsLWJhY2tlbmQtY2FyZWVyLTA5Lz91dG1fbWVkaXVtPWVtYWlsJnV0bV9zb3VyY2U9bWlkZnVubmVsJnV0bV9jYW1wYWlnbj1iYXUtY2FtcGFpZ25fYWNhZGVteV9%2BYTJrYm1iX0F1Z3VzdC0yMDIzLXc0X3BhbkluZGlhX2FjdGl2ZV9sZWFkZ2VuJnV0bV9jb250ZW50PV9tY18ifQ%3D%3D"
                                          rel="noopener"
                                          style="
                                            color: #0043c9;
                                            font-weight: bold;
                                          "
                                          target="_blank"
                                          data-saferedirecturl="https://www.google.com/url?q=https://c.webengage.com/lw/g1.jpg?p%3DeyJsYyI6In4xMzQxMDVhNjAiLCJsIjoiZWE3NTYxYzI3N2Y2ZGEyMDdmOTVhYjUwMDM3MmJjNjk5Yjg0MTFjYyIsImMiOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZW0iOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZSI6In5hMmtibWIiLCJ2IjoifjM2YzBvbDgiLCJzIjoiNDFnMTk2ODc4MDQzZWhpX2E5N2MyNzAzLWEyNWUtNDZjNi05NjVkLTY1NzFiNjA5MDg3ODoxNjkzMzA4OTQxMTUxIiwiZXZlbnQiOiJlbWFpbF9jbGljayIsImN0YSI6IjU2ZTRlMGRkIiwidG9VUkwiOiJodHRwczovL3d3dy5zY2FsZXIuY29tL2V2ZW50L3JvYWRtYXAtdG8tYS1zdWNjZXNzZnVsLWJhY2tlbmQtY2FyZWVyLTA5Lz91dG1fbWVkaXVtPWVtYWlsJnV0bV9zb3VyY2U9bWlkZnVubmVsJnV0bV9jYW1wYWlnbj1iYXUtY2FtcGFpZ25fYWNhZGVteV9%252BYTJrYm1iX0F1Z3VzdC0yMDIzLXc0X3BhbkluZGlhX2FjdGl2ZV9sZWFkZ2VuJnV0bV9jb250ZW50PV9tY18ifQ%253D%253D&amp;source=gmail&amp;ust=1693430344487000&amp;usg=AOvVaw3IFn8KoH1LTCeNu-1B3YyO"
                                          >Register Now</a
                                        >
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p>Regards,<br />Team Scaler</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td
              align="center"
              bgcolor="#e9eae3"
              height="100%"
              style="background: #e9eae3"
              valign="top"
              width="100%"
            >
              <table
                align="center"
                bgcolor="#e9eae3"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="m_-3240178940513258793outertab-1"
                role="presentation"
                style="
                  max-width: 570px;
                  border: 1px solid transparent;
                  border-radius: 20px 20px 0px 0;
                  overflow: hidden;
                "
                width="100%"
              >
                <tbody>
                  <tr>
                    <td
                      align="center"
                      style="
                        font-size: 0;
                        padding-top: 10px;
                        padding-bottom: 10px;
                      "
                      valign="top"
                    >
                      <div
                        class="m_-3240178940513258793tab-inner-1"
                        style="
                          display: inline-block;
                          margin: 0 0px;
                          max-width: 500px;
                          min-width: 160px;
                          vertical-align: top;
                          width: 100%;
                        "
                      >
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td
                                align="center"
                                style="
                                  padding-top: 12px;
                                  padding-bottom: 10px;
                                "
                                valign="top"
                              >
                                <img
                                  align="center"
                                  alt="Scaler footer Logo"
                                  class="m_-3240178940513258793img-mob CToWUd"
                                  height=""
                                  src="https://ci5.googleusercontent.com/proxy/7qQyk7ov36Nk1wdJRh4AL2fPOT3sEfeG9q9WyrJ2UgzAgFr_XeiZ-kysUErNlU-wPOPhU1P6sfgKT6dCGAPx9U4FZVZXt7NxZw9uQtk9RKIcN9U-EuPdP3gk2lYzFGTBsc-JzcaTu_w4=s0-d-e1-ft#https://email-editor-resources.s3.amazonaws.com/images/we134105a60/Mar/Logo-footer.png"
                                  width="140"
                                  data-bit="iit"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td
                                style="
                                  font-family: 'Montserrat', Arial, sans-serif;
                                  font-size: 0px;
                                  line-height: 0px;
                                  text-align: center;
                                  padding-bottom: 0px;
                                  font-weight: 0;
                                  padding-top: 0px;
                                "
                              >
                                &nbsp;
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top">
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  width="170"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        align="center"
                                        style="
                                          line-height: 0;
                                          font-size: 0;
                                          padding-top: 5px;
                                          padding-bottom: 10px;
                                          color: #e5ecf9;
                                        "
                                        valign="top"
                                        width="40"
                                      >
                                        <a
                                          href="https://c.webengage.com/lw/g1.jpg?p=eyJsYyI6In4xMzQxMDVhNjAiLCJsIjoiZWE3NTYxYzI3N2Y2ZGEyMDdmOTVhYjUwMDM3MmJjNjk5Yjg0MTFjYyIsImMiOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZW0iOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZSI6In5hMmtibWIiLCJ2IjoifjM2YzBvbDgiLCJzIjoiNDFnMTk2ODc4MDQzZWhpX2E5N2MyNzAzLWEyNWUtNDZjNi05NjVkLTY1NzFiNjA5MDg3ODoxNjkzMzA4OTQxMTUxIiwiZXZlbnQiOiJlbWFpbF9jbGljayIsImN0YSI6IjYzYjEyNDI2IiwidG9VUkwiOiJodHRwczovL3d3dy55b3V0dWJlLmNvbS9TY2FsZXJBY2FkZW15P3N1Yl9jb25maXJtYXRpb249MSZ1dG1fc291cmNlPW1pZGZ1bm5lbCZ1dG1fbWVkaXVtPWVtYWlsJnV0bV9jYW1wYWlnbj1zb2NpYWwifQ%3D%3D"
                                          rel="noopener"
                                          target="_blank"
                                          data-saferedirecturl="https://www.google.com/url?q=https://c.webengage.com/lw/g1.jpg?p%3DeyJsYyI6In4xMzQxMDVhNjAiLCJsIjoiZWE3NTYxYzI3N2Y2ZGEyMDdmOTVhYjUwMDM3MmJjNjk5Yjg0MTFjYyIsImMiOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZW0iOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZSI6In5hMmtibWIiLCJ2IjoifjM2YzBvbDgiLCJzIjoiNDFnMTk2ODc4MDQzZWhpX2E5N2MyNzAzLWEyNWUtNDZjNi05NjVkLTY1NzFiNjA5MDg3ODoxNjkzMzA4OTQxMTUxIiwiZXZlbnQiOiJlbWFpbF9jbGljayIsImN0YSI6IjYzYjEyNDI2IiwidG9VUkwiOiJodHRwczovL3d3dy55b3V0dWJlLmNvbS9TY2FsZXJBY2FkZW15P3N1Yl9jb25maXJtYXRpb249MSZ1dG1fc291cmNlPW1pZGZ1bm5lbCZ1dG1fbWVkaXVtPWVtYWlsJnV0bV9jYW1wYWlnbj1zb2NpYWwifQ%253D%253D&amp;source=gmail&amp;ust=1693430344487000&amp;usg=AOvVaw29PQWwYyDhrirBlrFsQLLa"
                                          ><img
                                            align="center"
                                            alt="Scaler youtube"
                                            class="m_-3240178940513258793img-mob CToWUd"
                                            height=""
                                            src="https://ci4.googleusercontent.com/proxy/2EE4NDjC_YVdPj2fK1LOIX3hPW4lWqgC-8EuqdPABHYucWInBfnfkmOrKhT0cg42CwD-Q4mpb4uvVHM3BCNKsNq9SRod6G5M7thtz7Vp8l26fz40szWFgEMeZ1GvspCDNuVGhow=s0-d-e1-ft#https://email-editor-resources.s3.amazonaws.com/images/we134105a60/Mar/youtube.png"
                                            width="30"
                                            data-bit="iit"
                                        /></a>
                                      </td>
                                      <td
                                        align="center"
                                        style="
                                          line-height: 0;
                                          font-size: 0;
                                          padding-top: 5px;
                                          padding-bottom: 10px;
                                        "
                                        valign="top"
                                        width="40"
                                      >
                                        <a
                                          href="https://c.webengage.com/lw/g1.jpg?p=eyJsYyI6In4xMzQxMDVhNjAiLCJsIjoiZWE3NTYxYzI3N2Y2ZGEyMDdmOTVhYjUwMDM3MmJjNjk5Yjg0MTFjYyIsImMiOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZW0iOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZSI6In5hMmtibWIiLCJ2IjoifjM2YzBvbDgiLCJzIjoiNDFnMTk2ODc4MDQzZWhpX2E5N2MyNzAzLWEyNWUtNDZjNi05NjVkLTY1NzFiNjA5MDg3ODoxNjkzMzA4OTQxMTUxIiwiZXZlbnQiOiJlbWFpbF9jbGljayIsImN0YSI6IjNkNWM3OTZjIiwidG9VUkwiOiJodHRwczovL3d3dy5saW5rZWRpbi5jb20vc2Nob29sL3NjYWxlcmFjYWRlbXk%2FdXRtX3NvdXJjZT1taWRmdW5uZWwmdXRtX21lZGl1bT1lbWFpbCZ1dG1fY2FtcGFpZ249c29jaWFsIn0%3D"
                                          rel="noopener"
                                          target="_blank"
                                          data-saferedirecturl="https://www.google.com/url?q=https://c.webengage.com/lw/g1.jpg?p%3DeyJsYyI6In4xMzQxMDVhNjAiLCJsIjoiZWE3NTYxYzI3N2Y2ZGEyMDdmOTVhYjUwMDM3MmJjNjk5Yjg0MTFjYyIsImMiOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZW0iOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZSI6In5hMmtibWIiLCJ2IjoifjM2YzBvbDgiLCJzIjoiNDFnMTk2ODc4MDQzZWhpX2E5N2MyNzAzLWEyNWUtNDZjNi05NjVkLTY1NzFiNjA5MDg3ODoxNjkzMzA4OTQxMTUxIiwiZXZlbnQiOiJlbWFpbF9jbGljayIsImN0YSI6IjNkNWM3OTZjIiwidG9VUkwiOiJodHRwczovL3d3dy5saW5rZWRpbi5jb20vc2Nob29sL3NjYWxlcmFjYWRlbXk%252FdXRtX3NvdXJjZT1taWRmdW5uZWwmdXRtX21lZGl1bT1lbWFpbCZ1dG1fY2FtcGFpZ249c29jaWFsIn0%253D&amp;source=gmail&amp;ust=1693430344487000&amp;usg=AOvVaw2xxV7nwUQrOeNBTDneqfWC"
                                          ><img
                                            align="center"
                                            alt="Scaler LinkedIn"
                                            class="m_-3240178940513258793img-mob CToWUd"
                                            height=""
                                            src="https://ci4.googleusercontent.com/proxy/M__z26LvZa4aKM7MtDzRs2ZRUiClRzy3ikYtEthkSM6KyDLAZ5ci8MzY7769yYGfFJnU15Zr8p6BdnoKgmSycbpQ5KOdrWukXJoMXS9-l6zJF6vli5lyZkXLJmE6t5XA9AYXNrQL=s0-d-e1-ft#https://email-editor-resources.s3.amazonaws.com/images/we134105a60/Mar/linkedin.png"
                                            width="30"
                                            data-bit="iit"
                                        /></a>
                                      </td>
                                      <td
                                        align="center"
                                        style="
                                          line-height: 0;
                                          font-size: 0;
                                          padding-top: 5px;
                                          padding-bottom: 10px;
                                        "
                                        valign="top"
                                        width="40"
                                      >
                                        <a
                                          href="https://c.webengage.com/lw/g1.jpg?p=eyJsYyI6In4xMzQxMDVhNjAiLCJsIjoiZWE3NTYxYzI3N2Y2ZGEyMDdmOTVhYjUwMDM3MmJjNjk5Yjg0MTFjYyIsImMiOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZW0iOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZSI6In5hMmtibWIiLCJ2IjoifjM2YzBvbDgiLCJzIjoiNDFnMTk2ODc4MDQzZWhpX2E5N2MyNzAzLWEyNWUtNDZjNi05NjVkLTY1NzFiNjA5MDg3ODoxNjkzMzA4OTQxMTUxIiwiZXZlbnQiOiJlbWFpbF9jbGljayIsImN0YSI6IjRhMjhhY2E1IiwidG9VUkwiOiJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NjYWxlcl9vZmZpY2lhbD91dG1fc291cmNlPW1pZGZ1bm5lbCZ1dG1fbWVkaXVtPWVtYWlsJnV0bV9jYW1wYWlnbj1zb2NpYWwifQ%3D%3D"
                                          rel="noopener"
                                          target="_blank"
                                          data-saferedirecturl="https://www.google.com/url?q=https://c.webengage.com/lw/g1.jpg?p%3DeyJsYyI6In4xMzQxMDVhNjAiLCJsIjoiZWE3NTYxYzI3N2Y2ZGEyMDdmOTVhYjUwMDM3MmJjNjk5Yjg0MTFjYyIsImMiOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZW0iOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZSI6In5hMmtibWIiLCJ2IjoifjM2YzBvbDgiLCJzIjoiNDFnMTk2ODc4MDQzZWhpX2E5N2MyNzAzLWEyNWUtNDZjNi05NjVkLTY1NzFiNjA5MDg3ODoxNjkzMzA4OTQxMTUxIiwiZXZlbnQiOiJlbWFpbF9jbGljayIsImN0YSI6IjRhMjhhY2E1IiwidG9VUkwiOiJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NjYWxlcl9vZmZpY2lhbD91dG1fc291cmNlPW1pZGZ1bm5lbCZ1dG1fbWVkaXVtPWVtYWlsJnV0bV9jYW1wYWlnbj1zb2NpYWwifQ%253D%253D&amp;source=gmail&amp;ust=1693430344487000&amp;usg=AOvVaw1eScAhQeHF0JuUBiY4iEdD"
                                          ><img
                                            align="center"
                                            alt="Scaler instagram"
                                            class="m_-3240178940513258793img-mob CToWUd"
                                            height=""
                                            src="https://ci4.googleusercontent.com/proxy/2fe585-FMGPEU4ZEhGWkM0tl4xHIy76PjaStPkKevT61b8oZhL3Vmkn-wgtx1_2jnZIogQdfAZpqUBpqNblbDhKAt7mw-AUw2XZjn5bnY4sPkYH_MRpdWHD_O0ZZeVQxfx5td18LWw=s0-d-e1-ft#https://email-editor-resources.s3.amazonaws.com/images/we134105a60/Mar/instagram.png"
                                            width="30"
                                            data-bit="iit"
                                        /></a>
                                      </td>
                                      <td
                                        align="center"
                                        style="
                                          line-height: 0;
                                          font-size: 0;
                                          padding-top: 5px;
                                          padding-bottom: 10px;
                                        "
                                        valign="top"
                                        width="40"
                                      >
                                        <a
                                          href="https://c.webengage.com/lw/g1.jpg?p=eyJsYyI6In4xMzQxMDVhNjAiLCJsIjoiZWE3NTYxYzI3N2Y2ZGEyMDdmOTVhYjUwMDM3MmJjNjk5Yjg0MTFjYyIsImMiOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZW0iOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZSI6In5hMmtibWIiLCJ2IjoifjM2YzBvbDgiLCJzIjoiNDFnMTk2ODc4MDQzZWhpX2E5N2MyNzAzLWEyNWUtNDZjNi05NjVkLTY1NzFiNjA5MDg3ODoxNjkzMzA4OTQxMTUxIiwiZXZlbnQiOiJlbWFpbF9jbGljayIsImN0YSI6IjI0YzUxMmViIiwidG9VUkwiOiJodHRwczovL2Rpc2NvcmQuY29tL2ludml0ZS96ZWJnSHVQN0M5In0%3D"
                                          rel="noopener"
                                          target="_blank"
                                          data-saferedirecturl="https://www.google.com/url?q=https://c.webengage.com/lw/g1.jpg?p%3DeyJsYyI6In4xMzQxMDVhNjAiLCJsIjoiZWE3NTYxYzI3N2Y2ZGEyMDdmOTVhYjUwMDM3MmJjNjk5Yjg0MTFjYyIsImMiOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZW0iOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZSI6In5hMmtibWIiLCJ2IjoifjM2YzBvbDgiLCJzIjoiNDFnMTk2ODc4MDQzZWhpX2E5N2MyNzAzLWEyNWUtNDZjNi05NjVkLTY1NzFiNjA5MDg3ODoxNjkzMzA4OTQxMTUxIiwiZXZlbnQiOiJlbWFpbF9jbGljayIsImN0YSI6IjI0YzUxMmViIiwidG9VUkwiOiJodHRwczovL2Rpc2NvcmQuY29tL2ludml0ZS96ZWJnSHVQN0M5In0%253D&amp;source=gmail&amp;ust=1693430344487000&amp;usg=AOvVaw3Up2G3HXU-RBTEK9Ot3g-L"
                                          ><img
                                            align="center"
                                            alt="Scaler Discord"
                                            class="m_-3240178940513258793img-mob CToWUd"
                                            height=""
                                            src="https://ci3.googleusercontent.com/proxy/Vc1A6y0aAI_oVoY8mESuXm9t0ICS5U_Cs3WvqK468efhNSnqq3kV4iy7jfEV_OqBv2N5EuFE_t4lNCgOC3TYQeuezZEv4UcWzLDgsMYxt31TP_0OQAsK_6cu0Hwk29JEsSgFmJc=s0-d-e1-ft#https://email-editor-resources.s3.amazonaws.com/images/we134105a60/Mar/discord.png"
                                            width="30"
                                            data-bit="iit"
                                        /></a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style="
                                  font-family: 'Montserrat', Arial, sans-serif;
                                  font-size: 12px;
                                  line-height: 16px;
                                  color: #364663;
                                  text-align: center;
                                  padding-bottom: 0px;
                                  font-weight: 400;
                                  padding-top: 0px;
                                "
                              >
                                Copyright © 2023&nbsp;Scaler.com, All rights
                                reserved You are getting this mail because
                                your e-mail ID is registered with us. To stop
                                receiving these emails click-
                                <strong
                                  ><a
                                    href="https://dashboard.webengage.com/users/emails/unsubscribe.html?p=eyJsYyI6In4xMzQxMDVhNjAiLCJsIjoiZWE3NTYxYzI3N2Y2ZGEyMDdmOTVhYjUwMDM3MmJjNjk5Yjg0MTFjYyIsImMiOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZW0iOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZSI6In5hMmtibWIiLCJ2IjoifjM2YzBvbDgiLCJzIjoiNDFnMTk2ODc4MDQzZWhpX2E5N2MyNzAzLWEyNWUtNDZjNi05NjVkLTY1NzFiNjA5MDg3ODoxNjkzMzA4OTQxMTUxIiwiZXZlbnQiOiJlbWFpbF91bnN1YnNjcmliZSIsImN0YSI6IjMxOTE0NjM0In0%3D"
                                    rel="noopener"
                                    style="
                                      text-decoration: none;
                                      color: #364663;
                                    "
                                    target="_blank"
                                    data-saferedirecturl="https://www.google.com/url?q=https://dashboard.webengage.com/users/emails/unsubscribe.html?p%3DeyJsYyI6In4xMzQxMDVhNjAiLCJsIjoiZWE3NTYxYzI3N2Y2ZGEyMDdmOTVhYjUwMDM3MmJjNjk5Yjg0MTFjYyIsImMiOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZW0iOiJjb250YWN0QHRoZXNwZWNpYWxjaGFyYWN0ZXIuY29tIiwiZSI6In5hMmtibWIiLCJ2IjoifjM2YzBvbDgiLCJzIjoiNDFnMTk2ODc4MDQzZWhpX2E5N2MyNzAzLWEyNWUtNDZjNi05NjVkLTY1NzFiNjA5MDg3ODoxNjkzMzA4OTQxMTUxIiwiZXZlbnQiOiJlbWFpbF91bnN1YnNjcmliZSIsImN0YSI6IjMxOTE0NjM0In0%253D&amp;source=gmail&amp;ust=1693430344488000&amp;usg=AOvVaw1K_6IABrkLcftwe2a03hcd"
                                    >Unsubscribe</a
                                  ></strong
                                >
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </center>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

main().catch(console.error);