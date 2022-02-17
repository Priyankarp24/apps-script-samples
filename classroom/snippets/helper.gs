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
 * A simple existance assertion. Logs if the value is falsy.
 * @param {any} value The value we expect to exist.
 */
function expectToExist(value) {
  if (!value) {
    Logger.log('DNE');
    return;
  }
  Logger.log('TEST: Exists');
}

/**
 * A simple equality assertion. Logs if there is a mismatch.
 * @param {any} expected The expected value.
 * @param {any} actual The actual value.
 */
function expectToEqual(expected, actual) {
  if (actual !== expected) {
    Logger.log('TEST: actual: %s = expected: %s', actual, expected);
    return;
  }
  Logger.log('TEST: actual: %s = expected: %s', actual, expected);
}

/**
 * Delete the file
 * @param {string} courseId
 */
function deleteCourse(courseId) {
  Classroom.Courses.remove(courseId);
}

/**
 * Delete the file
 * @param {string} courseId
 */
function deleteAlias(courseId) {
  Classroom.Courses.Aliases.remove(courseId);
}
