/**
 * Copyright Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Runs all tests.
 */
function RUN_ALL_TESTS() {
  itShouldCreateCourse();
  itShouldGetCourse();
  itShouldUpdateCourse();
  itShouldPatchCourse();
  itShouldCreateAliasCourse();
  itShouldAddAliasCourse();
  itShouldListCourses();
}

/**
 * Creates a course.
 */
function itShouldCreateCourse() {
  const courseId = createCourse();
  expectToExist(courseId);
  deleteCourse(courseId);
}

/**
 * Get a course.
 */
function itShouldGetCourse() {
  const courseId = createCourse();
  expectToExist(courseId);
  getCourse(courseId);
  deleteCourse(courseId);
}

/**
 * Update a course.
 */
function itShouldUpdateCourse() {
  const courseId = createCourse();
  expectToExist(courseId);
  courseUpdate(courseId);
  deleteCourse(courseId);
}

/**
 * Patch Update a course.
 */
function itShouldPatchCourse() {
  const courseId = createCourse();
  expectToExist(courseId);
  coursePatch(courseId);
  deleteCourse(courseId);
}

/**
 * Add alias to  existing course.
 */
function itShouldAddAliasCourse() {
  const courseId = createCourse();
  expectToExist(courseId);
  addAlias(courseId);
  deleteCourse(courseId);
}

/**
 * Create alias to  new course.
 */
function itShouldCreateAliasCourse() {
  const courseId = createAlias();
  expectToExist(courseId);
  deleteCourse(courseId);
}
/**
 * List the course.
 */
function itShouldListCourses() {
  Logger.log('It should list the courses');
  listCourses();
}
