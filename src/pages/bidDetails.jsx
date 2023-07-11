import React, { useEffect, useState } from "react";
import Layout from "../layouts";
import { useNavigate, useParams } from "react-router-dom";
import { useAdmin } from "../hooks/useAdminBid";
import { color } from "../constants/color";

const BidDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { useGetAdminPostByID } = useAdmin();

  const [data, setData] = useState({
    title: "",
    bidAmount: "",
    description: "",
    email: "",
  });

  useEffect(() => {
    if (params.id) {
      console.log(params.id);
      useGetAdminPostByID(params.id).then((res) => {
        setData(res);
      });
    }
  }, [params.id]);

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "25px",
            margin: "15px",
          }}
        >
          <button
            style={{ marginRight: "15px" }}
            onClick={() => navigate("/trainingList")}
          >
            ←
          </button>
          <b>{data.title}</b>
        </div>
      </div>
      <hr />
      <div
        style={{ display: "flex", justifyContent: "center", margin: "30px" }}
      >
        Steps to Upload Files into MongoDB Using Mongoose GridFS Prometheus Here
        are the steps to take when uploading a file into MongoDB using Mongoose
        GridFS Prometheus: Step 1: Build a Node.JS Application Step 2: Upload
        Your Files into FileU Step 3: Storing Your Files in MongoDB through Grid
        FS Step 1: Build a Node.JS Application We need a Node.JS application to
        run the code for uploading our files into MongoDB. You can create a
        Node.JS application with your npm package. The packages you need to run
        the Node.JS application are third-party modules like mongoose. That
        said, you have to install these packages into npm to use them. Before
        you start installing these packages, you need to create a node project,
        and configure it to npm. Follow these steps to build your node project:
        Create a folder on your computer and navigate to it. You can quickly do
        this by running a command line on your Command Prompt tool.
        <br /> Let’s assume that the title of the folder is ‘building npm
        project’. Type the following in Command Prompt: mkdir
        building-npm-project (to create the folder) cd building-npm-project (to
        navigate to the folder) Enter ‘npminit’ command in Command Prompt to
        configure the project folder to npm. After creating the node project,
        you need to install the packages you need for building your node.js
        application. These packages are: Mongoose (This package will translate
        the node.JS code to MongoDB) Express (You’ll need this package for any
        HTTP requests you want to run) BodyParser (This package lets you receive
        content from HTML forms) Multer (This package enables easy file upload
        into MongoDB Multer-gridfs-storage (You need this package to implement
        the MongoDB gridfs feature with multer). Apart from the packages above,
        you also need to install nodemon as a dependency for your node.js
        application. The structure of a compiler can be divided into several
        components or phases, each responsible for a specific task in the
        compilation process. The following is a typical structure of a compiler:
        <br /> 1. Lexical Analyzer (Scanner): The lexical analyzer, also known
        as a scanner, processes the source code character by character and
        groups them into tokens. It recognizes keywords, identifiers, literals,
        operators, and other language-specific constructs. The scanner
        eliminates unnecessary whitespace and comments. <br /> 2. Syntax
        Analyzer (Parser): The syntax analyzer, or parser, takes the tokens
        produced by the lexical analyzer and verifies that they conform to the
        grammar rules of the programming language. It constructs a parse tree or
        an abstract syntax tree (AST) that represents the structure of the code.
        The parser detects syntax errors and enforces the correct ordering and
        nesting of language constructs.
        <br /> 3. Semantic Analyzer: The semantic analyzer performs semantic
        checks on the parse tree or AST generated by the parser. It ensures that
        the code adheres to the language's semantic rules. This phase includes
        tasks such as type checking, symbol table management, and scope
        resolution. The semantic analyzer detects semantic errors and generates
        appropriate error messages.
        <br /> 4. Intermediate Code Generator: The intermediate code generator
        translates the parsed and semantically analyzed code into an
        intermediate representation that is independent of the target machine or
        virtual machine. This intermediate code is usually closer to the target
        machine code but still abstract enough for further optimization.
        <br /> 5. Code Optimizer: The code optimizer analyzes the intermediate
        code and applies various optimization techniques to improve the
        efficiency and performance of the generated code. It performs
        transformations like constant folding, dead code elimination, loop
        optimization, and register allocation. The goal is to produce optimized
        code that executes faster and consumes fewer resources. <br /> 6. Code
        Generator: The code generator takes the optimized intermediate code and
        translates it into the target machine code or bytecode. This phase is
        specific to the target architecture or virtual machine. It maps the
        intermediate code constructs to the corresponding instructions or
        bytecode instructions understood by the target environment.
        <br /> 7. Symbol Table: The symbol table is a data structure used by
        various phases of the compiler to store information about identifiers
        (variables, functions, classes, etc.) used in the program. It tracks the
        names, types, scope, and other attributes of symbols. The symbol table
        aids in semantic analysis, name resolution, and code generation. 8.
        Error Handler: Throughout the compilation process, the compiler checks
        for errors and generates appropriate error messages when violations of
        language rules are encountered. The error handler identifies and reports
        syntax errors, semantic errors, and other issues in the source code.
        These components work together sequentially, with the output of one
        phase serving as the input for the next phase, to transform the source
        code into executable machine code or bytecode. However, it's important
        to note that the structure of a compiler can vary depending on the
        specific implementation and requirements of the language being compiled.
      </div>
      <div
        style={{
          margin: "25px",
        }}
      ></div>
    </Layout>
  );
};

export default BidDetails;
