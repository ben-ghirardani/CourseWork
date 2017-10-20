require('minitest/autorun')

require_relative('./library')

class TestLibrary < MiniTest::Test

  
    the_library = Library.new([{ 
    title: "lord_of_the_rings",
    rental_details: { 
     student_name: "Jeff", 
     date: "01/12/16"
    }},
    { 
    title: "Cloud Atlas",
    rental_details: { 
     student_name: "Ben", 
     date: "06/18/17"
    }}
  ])
  


end