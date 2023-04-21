import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export function TutorialComponent()
{
    var now = new Date();
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <h2>Tutorial Home  - Page Requested on  {now.toLocaleTimeString()}</h2>
                <ol>
                    <li><Link to="html">HTML</Link></li>
                    <li><Link to="css">CSS</Link></li>
                    <li><Link to="js">JavaScript</Link></li>
                </ol>
                <hr size="4" noshade/>
                <Routes>
                    <Route path="html" element={
                        <div>
                            <h2>HTML</h2>
                            <p>It is a markup language.</p>
                        </div>
                    } />
                    <Route path="css" element={
                        <div>
                            <h2>CSS</h2>
                            <p>It defines styles for HTML.</p>
                        </div>
                    } />
                    <Route path="js" element={
                        <div>
                            <h2>JavaScript</h2>
                            <p>It is a language to manipulate DOM.</p>
                        </div>
                    } />
                      <Route path="/" element={
                        <div>
                            <h2>Home</h2>
                            <p>Welcome to tutorial home.</p>
                        </div>
                    } />
                      <Route path="*" element={
                        <div>
                            <h2>Not Found</h2>
                            <code>Tutorial You requested not found.</code>
                        </div>
                    } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}