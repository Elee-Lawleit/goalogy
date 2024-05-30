import React, { useRef, useEffect } from "react"
import { FaDownload, FaPrint } from "react-icons/fa6"
import jsPDF from "jspdf"
import { useReactToPrint } from "react-to-print"
import html2canvas from "html2canvas"
import { Chart } from "chart.js"
import { BarController, LinearScale, CategoryScale, BarElement } from "chart.js"

const LearningPlan = () => {
  const data = {
    labels: "label_here",
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  }

  useEffect(() => {
    Chart.register(BarController, LinearScale, CategoryScale, BarElement)
    const chart = new Chart(document.getElementById("modifications"), {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    })
    

    return () => chart.destroy()
  }, [])

  const printRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  })

  const handleDownload = async () => {
    const element = printRef.current
    const canvas = await html2canvas(element, {
      scale: 2,
    })
    const imgData = canvas.toDataURL("image/png")
    const pdf = new jsPDF("p", "mm", "a4")

    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()
    const imgProps = pdf.getImageProperties(imgData)
    const imgWidth = imgProps.width
    const imgHeight = imgProps.height
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
    const width = imgWidth * ratio
    const height = imgHeight * ratio

    pdf.addImage(imgData, "PNG", 0, 0, width, height)
    pdf.save("Learning_Plan.pdf")
  }

  return (
    <div className="w-full h-full bg-[#f5f7fa] p-3 grid gap-4">
      {/* buttons div */}
      <div className="bg-white p-3 w-[672px] mx-auto rounded-md">
        <div className="flex gap-2">
          <button
            className="rounded-md bg-custom-green2 hover:bg-custom-green1 px-2.5 py-1.5 text-lg text-white shadow-sm ring-1 ring-inset flex gap-2 items-baseline"
            onClick={handleDownload}
          >
            <FaDownload className="inline-block" />
            Download Learning Plan PDF
          </button>
          <button
            className="rounded-md bg-custom-green2 hover:bg-custom-green1 px-2.5 py-1.5 text-lg text-white shadow-sm ring-1 ring-inset flex gap-2 items-baseline"
            onClick={handlePrint}
          >
            <FaPrint className="inline-block" />
            Print Learning plan
          </button>
        </div>
      </div>

      {/* Report div */}
      <div
        className="w-[672px] mx-auto rounded-md flex flex-col gap-[1px]"
        ref={printRef}
      >
        {/* name section */}
        <div className="flex justify-between w-full bg-white p-2 rounded-md border border-[#0000001c]">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl">Student Learning Plan</h1>
            <div className="text-lg">
              Student Name: <span className="font-semibold">Malik Nabeel</span>
            </div>
          </div>
          <div>
            <img
              src="/goalogylogo.png"
              alt="goalogy logo"
              className="w-[98px] h-[72px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-between w-full bg-white p-2 rounded-md border border-[#0000001c]">
          <div className="">
            <span className="font-semibold">Goal: </span>
            <span>
              I can read complex texts closely and analyze them with depth and
              nuance. They can make logical and insightful inferences based on
              textual evidence and can cite specific examples to support their
              conclusions in a clear and compelling way.
            </span>
          </div>
          <div>
            <span className="font-semibold">Skill / Understanding: </span>
            <span>Writing</span>
          </div>
          <div>
            <span className="font-semibold">Category: </span>
            <span className="mt-1 text-xs text-center px-1.5 py-1 bg-primary text-white rounded-md">
              Writing
            </span>
          </div>
          <div className="flex gap-1">
            <span className="font-semibold">Learning Plan Timeline: </span>
            <div className="flex gap-1">
              <span>03/08/2023</span>
              <span className="font-semibold">to</span>
              <span>03/07/2024</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-between w-full bg-white p-2 pr-2.5 rounded-md border border-[#0000001c]">
          <h2 className="text-xl underline">Goal Attainment Scale:</h2>
          <div className="flex gap-3 text-base items-start">
            <span className="bg-custom-purple1 h-fit px-4 py-2 text-base text-gray-800 w-10">
              9
            </span>
            <p>
              I can read complex texts closely and analyze them with depth and
              nuance. They can make logical and insightful inferences based on
              textual evidence and can cite specific examples to support their
              conclusions in a clear and compelling way.
            </p>
          </div>
          <div className="flex gap-3 text-base items-start">
            <span className="bg-custom-cyan1 h-fit px-4 py-2 text-base text-gray-800 w-10">
              7
            </span>
            <p>
              I can read closely to determine what the text says explicitly and
              can make sophisticated inferences based on textual evidence. They
              are able to cite specific textual evidence to support complex
              conclusions drawn from the text.
            </p>
          </div>
          <div className="flex gap-3 text-base items-start">
            <span className="bg-custom-green1 h-fit px-4 py-2 text-base text-gray-800 w-10">
              5
            </span>
            <p>
              I can read closely and identify explicit information from the
              text. They are able to make logical inferences based on textual
              evidence and provide specific examples to support their
              conclusions when writing or speaking.
            </p>
          </div>
          <div className="flex gap-3 text-base items-start">
            <span className="bg-custom-orange1 h-fit px-4 py-2 text-base text-gray-800 w-10">
              3
            </span>
            <p>
              I can identify the main idea of the text and some supporting
              details. They are beginning to make inferences based on textual
              evidence, but may struggle to cite specific evidence to support
              their conclusions.
            </p>
          </div>
          <div className="flex gap-3 text-base items-start">
            <span className="bg-custom-gray h-fit px-4 py-2 text-base text-gray-800 w-10">
              1
            </span>
            <p>
              I can identify some explicit information from the text, but
              struggles to make logical inferences or provide specific textual
              evidence to support conclusions.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-between w-full bg-white p-2 pr-2.5 rounded-md border border-[#0000001c]">
          <h2 className="text-xl">Strategies I will use:</h2>
          <div>
            <h3 className="text-xl mb-1">
              Strategies others will provide (including SDI):
            </h3>
            <p>
              Provide Malik with guided practice opportunities where the teacher
              models how to read closely and make inferences based on textual
              evidence. Gradually release responsibility to Malik, allowing him
              to practice these skills independently.
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-1">Accomodations:</h3>
            <p>
              Provide Malik with audio books or text-to-speech software. This
              will allow the him to access the text without being hindered by
              their decoding difficulties.
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-1">Modifications:</h3>
            <canvas id="modifications"></canvas>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningPlan
